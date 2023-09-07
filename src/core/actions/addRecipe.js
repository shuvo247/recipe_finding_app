const addRecipe = async ( { request, params } ) => {
    switch (request.method) {
        case "POST": {
        //   let formData = await request.formData();
        //   let email = formData.get("email");
        //   let password = formData.get("password");
          return { title : "Dosa", description : 'lorem ipsum' };
        }
        default: {
          throw new Response("", { status: 405 });
        }
    }
}
export default addRecipe;