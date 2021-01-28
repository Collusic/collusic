module.exports = {
    isOwner:function(req, res) {
        if (req.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(req, res) {
        var authStatusUI = `로그인 해주세요`;
        if (this.isOwner(req, res)) {
           var authStatusUI = `${req.user.username}님 환영합니다. | <a href="/logout">logout</a>`;
        }
        return authStatusUI;
    }
}