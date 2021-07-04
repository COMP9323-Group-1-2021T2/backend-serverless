import { Category, GetCategoriesResponse } from "../types";
import { response200 } from "../utils/responses";

export const handler = async () => {
  const mockCategories: Category[] = [
    {
      id: "ohs",
      name: "Occupational Health and Safety",
      parent_id: null,
    },
    {
      id: "mental-health",
      name: "Mental Health",
      parent_id: null,
    },
    {
      id: "physical-health",
      name: "Physical Health",
      parent_id: null,
    },
    {
      id: "machinery",
      name: "Machinery",
      parent_id: "ohs",
    },
    {
      id: "work-stress",
      name: "Work Stress",
      parent_id: "ohs",
    },
    {
      id: "ergonomics",
      name: "Ergonomics",
      parent_id: "ohs",
    },
    {
      id: "anxiety",
      name: "Anxiety",
      parent_id: "mental-health",
    },
    {
      id: "depression",
      name: "Depression",
      parent_id: "mental-health",
    },
    {
      id: "eaating-healthy",
      name: "Eating Helthy",
      parent_id: "physical-health",
    },
    {
      id: "exercise",
      name: "Exercise",
      parent_id: "physical-health",
    },
  ];

  return response200<GetCategoriesResponse>({ data: mockCategories });
};
