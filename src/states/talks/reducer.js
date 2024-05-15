import { ActionType } from './action';

/**
 * @TODO: Define the reducer for the talks state
 */
function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALKS:
      return action.payload.talks;
    case ActionType.ADD_TALK:
      // kesalahan sebelumnya
      // talks, seharusnya talk
      // jadi sistem tidak bisa membaca ketika .map
      return [action.payload.talk, ...talks];
    case ActionType.TOGGLE_LIKE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            likes: talk.likes.includes(action.payload.userId)
              ? talk.likes.filter((id) => id !== action.payload.userId) // hapus
              : talk.likes.concat([action.payload.userId]), // add
          };
        }
        return talk;
      });
    default:
      return talks;
  }
}

export default talksReducer;
