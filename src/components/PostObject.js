const PostObject = function(user, content, reply, vote, depth) {
	this.user = user
	this.content = content
	this.reply = reply // This is supposed to be another Post Object
	this.vote = vote
	this.depth = depth
}

export default PostObject;
