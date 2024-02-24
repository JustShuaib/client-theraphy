import { useMutation, useQuery } from "@tanstack/react-query";
import {
  checkThemeExistence,
  deleteTheme,
  fetchAllThemes,
  fetchThemePages,
  saveTheme,
} from "./admin.fetch";
import { useNavigate } from "react-router-dom";
export const useFetchAllThemes = () =>
  useQuery({
    queryKey: ["themes"],
    queryFn: fetchAllThemes,
  });
export const useFetchThemePages = (id) =>
  useQuery({
    queryKey: ["themes"],
    queryFn: () => fetchThemePages(id),
  });

export const useDeleteTheme = (id) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["themes"],
    mutationFn: () => deleteTheme(id),
    onSuccess: () => navigate("/admin/thema"),
  });
};
export const useCheckThemeExistence = (theme) => {
  return useMutation({
    mutationKey: ["themes"],
    mutationFn: () => checkThemeExistence(theme),
  });
};
export const useSaveTheme = (theme, hasSavedTheme) => {
  return useMutation({
    mutationKey: ["themes"],
    mutationFn: () => saveTheme(theme),
    onSuccess: hasSavedTheme,
  });
};
