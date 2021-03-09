export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect("/sign?id=1");
  }
}
