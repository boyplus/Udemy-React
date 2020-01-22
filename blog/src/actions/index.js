import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPost());
        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value();
    };
};
export const fetchPost = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const fetchUser = id => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};

// const posts = getState().posts;
// const userIds = _.uniq(_.map(posts, 'userId'));
// userIds.forEach(id => dispatch(fetchUser(id)));

//chain method
