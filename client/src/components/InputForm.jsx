import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const handleFormSubmit = (data) => {

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('product-img', data.image[0]);
    console.log(formData)


    axios
      .post("http://localhost:3000/products/images/upload-product-img", formData)
      .then((response) => {
        console.log("Added new image successfully:", response.data);
       
       
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .post("http://localhost:3000/products", formData)
      .then((response) => {
        console.log("Added new product successfully:", response.data);
        reset();
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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

          <input className="submit-button" type="submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
}
