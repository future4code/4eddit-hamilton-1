import axios from "axios";

const fetchPosts = (list) => ({
  type: "FETCH_POSTS",
  payload: {
    list,
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    console.log(response);

    dispatch(fetchPosts(response.data.posts));
  } catch (err) {
    console.log(err);
  }
};
