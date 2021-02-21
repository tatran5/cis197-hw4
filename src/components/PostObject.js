const PostObject = function(user, content, reply) {
	this.user = user
	this.content = content
	this.reply = reply // This is supposed to be another Post Object
}

export default PostObject;
