export default async function (context) {
    const res = await context.store.dispatch('getgamesDB')
    console.log("middleware started.")
    // console.log(context.store.state.games)
}