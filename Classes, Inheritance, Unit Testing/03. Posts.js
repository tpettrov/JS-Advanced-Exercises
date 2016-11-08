//function Solve() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;

        }

        toString() {

            return `Post: ${this.title}
Content: ${this.content}`;

        }

    }


    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {

            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];

        }

        addComment(comment) {

            this.comments.push(comment);

        }

        toString() {

            let commPrint = '';

            if (this.comments.length != 0) {

                for (let comment of this.comments) {

                    commPrint += ` * ${comment}\n`;
                }

                return `Post: ${this.title}
Content: ${this.content}
Rating: ${Number(this.likes) - Number(this.dislikes)}
Comments:
` + commPrint;

            }
            else return `Post: ${this.title}
Content: ${this.content}
Rating: ${Number(this.likes) - Number(this.dislikes)}`;



        }

    }

    class BlogPost extends Post {

        constructor(title, content, views) {

            super(title, content);
            this.views = views;

        }

        view() {

            this.views += 1;
            return this;

        }

        toString() {

            return `Post: ${this.title}
Content: ${this.content}
Views: ${this.views}`;

        }

    }

   // return {Post:Post, SocialMediaPost:SocialMediaPost, BlogPost:BlogPost };

//}

let post = new SocialMediaPost('Anton','e supdsaer qk', 10,15);
post.addComment('basi tapaka');
post.addComment('basi tapaka');
post.addComment('basi tapaka');

console.log(post.toString());