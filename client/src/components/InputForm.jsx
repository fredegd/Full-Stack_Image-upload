import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InputForm() {
  const [productData, setProductData] = useState("")
  const [uploadSuccess, setUploadSuccess] = useState("")

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("product-img", data.image[0]);


    axios
      .post(
        "http://localhost:3000/products/images/upload-product-img",
        formData
      )
      .then((response) => {
        setUploadSuccess(response.data)
        console.log("Added new image successfully:", response.data);

        
        axios
      .post("http://localhost:3000/products", {
        "name":
        `${data.name}`,
        "price":
        `${data.price}`,
        "image":
        "https://example.com/image43.jpg",
        "owner":
        `${data.owner}`})
      .then((response) => {
        console.log("Added new product successfully:", response.data);
        reset();
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

        reset();
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(data);
  };

  return (
    <>
      <div className="form-container">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          encType="multipart/form-data"
          method="post"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && <span>{errors.price.message}</span>}
          </div>

          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && <span>{errors.image.message}</span>}
          </div>

          <div>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              defaultValue="64a0173220bd7ca7d0c9b259"
              {...register("owner", { required: "Price is required" })}
            />
            {errors.owner && <span>{errors.owner.message}</span>}
          </div>
          

          <input className="submit-button" type="submit" value={"Submit"} />
        </form>
        <div>
          {uploadSuccess}
        </div>
      </div>
    </>
  );
}
