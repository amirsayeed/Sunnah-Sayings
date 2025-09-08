import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactTags from "@pathofdev/react-tag-input";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "@pathofdev/react-tag-input/build/index.css";
import { useNavigate } from "react-router";


const AddQuote = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const quote = {
      text: data.text,
      author: data.author,
      source: data.source || "",
      category: data.category,
      description: data.description || "",
      tags: tags,
      submittedBy: user?.email,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axiosSecure.post("/quotes", quote);
      if (res.data.insertedId) {
        Swal.fire("Success!", "Quote submitted successfully.", "success");
        reset();
        setTags([]);
      }
      navigate('/quotesList')
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text:
          err.response?.data?.error ||
          "Something went wrong while submitting the quote.",
      });
    }
  };

  return (
    <div className="my-10">
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-12 bg-white shadow-xl border border-[#4dbbe8] rounded-xl space-y-6"
    >
        <h2 className="text-3xl font-bold text-center mb-6">Add a Quote</h2>

        <div className="form-control w-full">
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

        <div className="form-control w-full">
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

        <div className="form-control w-full">
        <label className="label">Source / Reference</label>
        <input
            type="text"
            {...register("source")}
            placeholder="e.g. Sahih al-Bukhari, Surah Ash-Sharh (94:6)"
            className="input input-bordered w-full"
        />
        </div>

        <div className="form-control w-full">
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

        <div className="form-control w-full">
        <label className="label">Short Description</label>
        <textarea
            {...register("description")}
            className="textarea textarea-bordered h-20 w-full"
            placeholder="Explain the meaning or context briefly..."
        />
        </div>

        <div className="form-control w-full">
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

        <div className="form-control w-full">
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
            className="btn text-white bg-[#2dcfc4] w-full rounded-lg"
        >
            Submit Quote
        </button>
        </div>
    </form>
    </div>

  );
};

export default AddQuote;
