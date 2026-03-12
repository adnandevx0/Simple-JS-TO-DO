async function xx(){
    await setTimeout(() => {
        console.log("Hello World");
    },3000);
}
console.log("1");
console.log("2");
await xx();
console.log("3");
console.log("4");
