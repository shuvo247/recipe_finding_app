const addRecipe = async ( { request, params } ) => {
    switch (request.method) {
        case "POST": {
          const formData = await request.formData();
          const recipe_name = formData.get("recipe_name");
          const image_url = formData.get("image_url");
          const description = formData.get("description");
          return { recipe_name ,image_url , description };
        }
        default: {
          throw new Response("", { status: 405 });
        }
    }
}
export default addRecipe;