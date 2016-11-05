class TitleBar {

    constructor(title) {

        this.title = title;
        this.menu = [];

    }

    addLink (href, name) {

   this.menu.push(`<a class="menu-link" href="${href}">${name}</a>`);

    }


    appendTo(selector) {
        let menu = '';
         for(let each of this.menu) {

            menu +=each;
        }

        $(selector).prepend(`<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
   ${menu}
    </nav>
  </div>
</header>`);


        $('.button').on('click', function(){

            $('.drawer').toggle();


        })

    }


}

