
import show from "./show.posts";
import create from "./create.posts";
import edit from "./edit.posts";
import list from "./list.posts";

export default { 
  name: "posts",
  label: "posts",
  hide: false,
  create,
  edit,
  list,
  show,
}