"use client";
import React, { useState, useActionState } from "react";
import FormElementItem from "./FormElementItem";
import { FormState, ElementFormItems } from "@/lib/types";
import { sendAction } from "@/app/actions/sendAction";
import RangeSlider from "./rangeSlider/RangeSlider";

const Form = () => {
  const initialState: FormState = {
    errors: {},
    values: {},
    message: "",
    success: false,
  };

  const [elementFormItems, setElementFormItems] = useState<ElementFormItems[]>([
    {
      id: 1,
      title: "Web Design",
      completed: true,
    },
    {
      id: 2,
      title: "Collaboration",
      completed: false,
    },
    {
      id: 3,
      title: "Mobile App Design",
      completed: false,
    },
    {
      id: 4,
      title: "Others",
      completed: false,
    },
  ]);

  const formActionWithItems = async (
    initialState: FormState,
    formData: FormData,
  ) => {
    return sendAction(initialState, formData, elementFormItems, 1000, 5000);
  };

  const [state, formAction, isPending] = useActionState(
    formActionWithItems,
    initialState,
  );

  const toggleCheck = (id: number) => {
    const completedCount = elementFormItems.filter(
      (item) => item.completed,
    ).length;

    const itemToChange = elementFormItems.find((item) => item.id === id);

    if (itemToChange?.completed && completedCount === 1) {
      alert("At least one element must be selected!");
      return;
    }

    const updatedItems = [...elementFormItems];
    const index = updatedItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      updatedItems[index] = {
        ...updatedItems[index],
        completed: !updatedItems[index].completed,
      };
    } else {
      console.warn(`Element id=${id} not found`);
    }
    setElementFormItems(updatedItems);
  };

  return (
    <div className="form-container">
      <form action={formAction} className="form">
        {state.message && (
          <div
            className={`text-sm ps-4 py-1 ${state.success ? "text-green-600" : "text-red-400"}`}
          >
            {state.message}
          </div>
        )}
        <div className="form-input-field">
          <div className="input-field">
            <span>Full Name</span>
            <input
              type="text"
              required
              name="fullname"
              id="fullname"
              placeholder="Type here"
              autoComplete="name"
              className="input-item"
            />
            {state.errors.fullname && (
              <div className="text-red-400 text-sm ps-4 py-1">
                {state.errors.fullname}
              </div>
            )}
          </div>
          <div className="input-field">
            <span>Email</span>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Type here"
              autoComplete="email"
              className="input-item"
            />
            {state.errors.email && (
              <div className="text-red-400 text-sm ps-4 py-1">
                {state.errors.email}
              </div>
            )}
          </div>
        </div>
        <div className="form-element">
          <span>Why are you contacting us?</span>
          <div className="form-element-container">
            {elementFormItems.map((item) => (
              <FormElementItem
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
                toggleCheck={toggleCheck}
              />
            ))}
          </div>
        </div>
        <div className="form-element-budget">
          <div className="form-header">
            <span>Your Budget</span>
            <p>Slide to indicate your budget range</p>
          </div>

          <RangeSlider
            initialMin={1000}
            initialMax={5000}
            min={0}
            max={10000}
            step={100}
            priceCap={1000}
          />
        </div>
        <div className="input-field-message">
          <span>Your Message</span>
          <textarea
            rows={1}
            required
            name="yourmessage"
            id="yourmessage"
            placeholder="Type here"
            autoComplete="off"
            className="input-item-message"
          />
          {state.errors.yourmessage && (
            <div className="text-red-400 text-sm ps-4 py-1">
              {state.errors.yourmessage}
            </div>
          )}
          <div className="divider"></div>
        </div>
        <button type="submit" className="btn-sm btn-green" disabled={isPending}>
          {isPending ? "Send..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
