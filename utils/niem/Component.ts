import { VersionedItem } from "./Item";
import { Namespace } from "./Namespace";
import type { Version } from "./Version";

export abstract class Component extends VersionedItem {

  abstract category: any;

  definition = "";

  get localID() {
    return this.qname;
  }

  _name = "";

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value
    this._qname = this.prefix + ":" + value;
    this.id = Component.id(this.versionID, this._qname);
  }

  get namespaceID() {
    return Namespace.id(this.versionID, this.prefix);
  }

  abstract pattern: any;

  _prefix = "";

  get prefix() {
    return this._prefix;
  }

  set prefix(value) {
    this._prefix = value;
    this._qname = value + ":" + this.name;
    this.id = Component.id(this.versionID, this.qname);
  }

  _qname = "";

  get qname() {
    return this._qname;
  }

  set qname(value: string) {
    this._qname = value;
    [this._prefix, this._name] = value.split(":");
    this.id = Component.id(this.versionID, value);
  }

  get terms() {
    return this.qname

    // Replace dashes and underscores with spaces
    .replaceAll("_", " ")
    .replaceAll("-", " ")

    // Add a space after any non-digit that precedes a digit
    .replace(/(\D+)(\d+)/g, "$1 $2")

    // Add a space before an upper case letter following a lower case letter
    .replace(/([a-z]+)([A-Z]+)/g, " ")

    .split(" ");
  }

  constructor(version: Version, qname: string, definition?: string) {
    super(version);
    this.qname = qname;
    if (definition) this.definition = definition;
  }

  static override id(versionID: string, qname: string) {
    return `${versionID}/${qname}`;
  }

}
