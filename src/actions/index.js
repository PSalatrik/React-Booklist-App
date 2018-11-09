export function selectBook(book) {
//selectBook is a action creator and needs to return a action, an object with a type property  Action = type: PAYLOAD
	return {
		type: 'BOOK_SELECTED', 
		payload: book
	};
}
