"use server";
import { Credentials, ElementFormItems, FormState } from "@/lib/types";

export const sendAction = async (
  initialState: FormState,
  formData: FormData,
  elementFormItems: ElementFormItems[],
  initialMin: number,
  initialMax: number,
): Promise<FormState> => {
  const fullname = formData.get("fullname")?.toString();
  const email = formData.get("email")?.toString();
  const yourmessage = formData.get("yourmessage")?.toString();

  const budgetMinStr = formData.get("budgetMin");
  const budgetMaxStr = formData.get("budgetMax");
  const budgetMin = budgetMinStr ? Number(budgetMinStr) : initialMin;
  const budgetMax = budgetMaxStr ? Number(budgetMaxStr) : initialMax;

  const selectedElementIds = formData.getAll("selectedElements") as string[];
  const selectedTitles = elementFormItems
    .filter((item) => selectedElementIds.includes(item.id.toString()))
    .map((item) => item.title);

  const errors: Credentials = {};

  if (!fullname) errors.fullname = "fullname is required to fill in";
  if (!email) errors.email = "email is required to fill in";
  if (!yourmessage) errors.yourmessage = "yourmessage is required to fill in";

  if (isNaN(budgetMin) || isNaN(budgetMax)) {
    errors.budget = "Budget values must be valid numbers";
  } else if (budgetMin < 0 || budgetMax > 10000) {
    errors.budget = "Budget must be between 0 and 10 000";
  } else if (budgetMin > budgetMax) {
    errors.budget = "Minimum budget cannot be greater than maximum";
  }

  // --------- Проверка кол-ва ошибок
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { fullname, email, yourmessage, budgetMin, budgetMax },
      message: "An error has occurred!",
      success: false,
    };
  }

  try {
    console.log("Form data:", {
      fullname,
      email,
      yourmessage,
      selectedTitles,
      budgetMin,
      budgetMax,
    });

    return {
      errors: {},
      values: { fullname, email, yourmessage, budgetMin, budgetMax },
      message: "The form has been successfully submitted!",
      success: true,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      errors: {},
      values: { fullname, email, yourmessage, budgetMin, budgetMax },
      message: "An error occurred when submitting the form.",
      success: false,
    };
  }
};
