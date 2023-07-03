const uploadProductImage = (req, res,next) => {
    console.log(req.file, "is the uploaded file ",req.file.filename, req.file.path);

    //
    //insert into DB happens here
    //
res.status(200).send(
// `<div><h2>Here's the picture:</h2><img src='/${req.file.filename}' width="500"/></div>`
`<div><h2>Here's the picture:</h2><img src='/${req.file.filename}' alt='/${req.file.filename}' width="500"/></div>`
);
}

module.exports = uploadProductImage;