import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import ReactTags from "@pathofdev/react-tag-input";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "@pathofdev/react-tag-input/build/index.css";

const UpdateQuote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [tags, setTags] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure
      .get(`/quotes/${id}`)
      .then((res) => {
        const q = res.data;
        setValue("text", q.text);
        setValue("author", q.author);
        setValue("source", q.source || "");
        setValue("category", q.category);
        setValue("description", q.description || "");
        setTags(q.tags || []);
      })
      .catch(() =>
        Swal.fire("Error", "Failed to fetch quote details.", "error")
      );
  }, [id, axiosSecure, setValue]);

  const onSubmit = async (data) => {
    const updatedQuote = {
      text: data.text,
      author: data.author,
      source: data.source || "",
      category: data.category,
      description: data.description || "",
      tags,
      submittedBy: user?.email,
    };

    try {
      const res = await axiosSecure.patch(`/quotes/${id}`, updatedQuote);
      if (res?.data.modifiedCount) {
        Swal.fire("Success!", "Quote updated successfully.", "success");
        navigate("/quotesList");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update quote.", "error");
    }
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-10 bg-white shadow-xl border border-[#4dbbe8] rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Update Quote</h2>

        <div className="form-control mb-6 w-full">
          <label className="label">
            Quote / Verse / Saying<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            {...register("text", { required: true })}
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Enter the quote..."
          />
          {errors.text && (
            <p className="text-error text-sm mt-1">Quote text is required</p>
          )}
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">
            Author<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            {...register("author", { required: true })}
            placeholder="Prophet Muhammad ﷺ, Quran, Imam Ali (RA), etc."
            className="input input-bordered w-full"
          />
          {errors.author && (
            <p className="text-error text-sm mt-1">Author is required</p>
          )}
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">Source / Reference</label>
          <input
            type="text"
            {...register("source")}
            placeholder="e.g. Sahih al-Bukhari, Surah Ash-Sharh (94:6)"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">
            Category<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select Category</option>
            <option value="Quran">Quran</option>
            <option value="Hadith">Hadith</option>
            <option value="Scholar/Companion">Scholar / Companion</option>
          </select>
          {errors.category && (
            <p className="text-error text-sm mt-1">Category is required</p>
          )}
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">Short Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered h-20 w-full"
            placeholder="Explain the meaning or context briefly..."
          />
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">Tags</label>
          <ReactTags
            tags={tags}
            onChange={setTags}
            placeholder="Add tags and press Enter"
            classNames={{
              tags: "flex flex-wrap gap-2 p-2 bg-white border rounded-md",
              tag: "bg-blue-500 text-white px-3 py-1 rounded-md",
              tagInput: "w-full",
              tagInputField: "input w-full h-10",
              remove: "ml-2 cursor-pointer text-sm",
            }}
          />
        </div>

        <div className="form-control mb-6 w-full">
          <label className="label">Submitted By</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn text-white bg-[#4dbbe8] w-full hover:bg-[#3aa1c1]"
          >
            Update Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateQuote;
