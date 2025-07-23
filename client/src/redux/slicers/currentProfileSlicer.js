import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/currentProfileActions";

export const currentProfileSlicer = createSlice({
  name: "currentProfile",
  initialState: {
    data: null,
    bookmarks: null,
    loading: false,
    errors: null,
  },
  extraReducers: {
    // Sign Up
    [action.signUp.pending]: (state) => {
      state.loading = true;
    },
    [action.signUp.fulfilled]: (state, action) => {
      console.log("SIGN UP FULFILLED:", action.payload);
      state.loading = false;

      if (!action.payload || typeof action.payload !== "object") {
        state.errors = "Unexpected payload structure";
        return;
      }

      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
        state.errors = null;
      } else {
        state.errors = data?.message || "Signup failed";
      }
    },
    [action.signUp.rejected]: (state, action) => {
      console.log("SIGN UP REJECTED:", action.payload);
      state.loading = false;
      state.errors = action.payload?.errors || "Signup failed";
    },

    // Sign In
    [action.signIn.pending]: (state) => {
      state.loading = true;
    },
    [action.signIn.fulfilled]: (state, action) => {
      console.log("SIGN IN FULFILLED:", action.payload);
      state.loading = false;

      if (!action.payload || typeof action.payload !== "object") {
        state.errors = "Unexpected payload structure";
        return;
      }

      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
        state.errors = null;
      } else {
        state.errors = data?.message || "Signin failed";
      }
    },
    [action.signIn.rejected]: (state, action) => {
      console.log("SIGN IN REJECTED:", action.payload);
      state.loading = false;
      state.errors = action.payload?.errors || "Signin failed";
    },

    // Sign Out
    [action.signOut.fulfilled]: (state, action) => {
      console.log("SIGN OUT:", action.payload);
      state.data = null;
    },

    // Get Current Profile
    [action.getCurrentProfile.fulfilled]: (state, action) => {
      console.log("GET PROFILE:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.data = data;
        state.errors = null;
      } else {
        state.errors = data?.message || "Failed to load profile";
      }
    },

    // Edit Profile
    [action.editProfile.fulfilled]: (state, action) => {
      console.log("EDIT PROFILE:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.data = data;
        state.errors = null;
      } else {
        state.errors = data?.message || "Profile update failed";
      }
    },

    // Upload Avatar
    [action.uploadAvatar.fulfilled]: (state, action) => {
      console.log("UPLOAD AVATAR:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.data = { ...state.data, avatar: data.avatar };
      } else {
        state.errors = data?.message || "Avatar upload failed";
      }
    },

    // Bookmarks
    [action.getBookmarks.fulfilled]: (state, action) => {
      console.log("GET BOOKMARKS:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.bookmarks = data;
      } else {
        state.errors = data?.message || "Failed to load bookmarks";
      }
    },
    [action.addBookmark.fulfilled]: (state, action) => {
      console.log("ADD BOOKMARK:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.bookmarks = [...(state.bookmarks || []), data];
      } else {
        state.errors = data?.message || "Add bookmark failed";
      }
    },
    [action.removeBookmark.fulfilled]: (state, action) => {
      console.log("REMOVE BOOKMARK:", action.payload);
      const { status, data } = action.payload || {};
      if (status === 200) {
        state.bookmarks = state.bookmarks?.filter(
          (item) => item._id !== data._id
        );
      } else {
        state.errors = data?.message || "Remove bookmark failed";
      }
    },
  },
});

export default currentProfileSlicer.reducer;
