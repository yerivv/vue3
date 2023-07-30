import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`/${id}`);
}

//게시글 생성
export function createPost(data) {
	return posts.post('', data);
}

//업데이트(수정)
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
	//put : 전체 수정할 때
	//patch : 일부 수정할 때
}

//삭제
export function deletePosts(id) {
	return posts.delete(`/${id}`);
}
