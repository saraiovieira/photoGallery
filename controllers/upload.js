export const uploadPath = (req, res) => {
    res.render("upload");
};

export const uploadFile = (req,res) => {
    try {
    if (req.file == undefined) {
      return res.render("upload", {errors: "You must select a file"});
    } 

    return res.redirect('/uploaded');

    } catch (error) {
    console.log(error);
    return res.render("upload", {errors: `Error when trying upload image: ${error}`});
    }
};

