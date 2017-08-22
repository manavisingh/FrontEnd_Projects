        var titles = new Array();
        var texts = new Array();
        var delBtnsTitle = new Array();
        var delBtnsText = new Array();

        function newTitle()
        {
            var name = "Title" + titles.length;
            var btns = "ButtonTitle" + delBtnsTitle.length;
            
            if (name !== "Title0")
            {
                newHeading();
                end;
            }
            
            var newTitle = document.createElement('input');
            newTitle.setAttribute("type", "text")
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "title")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            titles.push(name)
            
            var btn = document.createElement('input');
            btn.setAttribute("type", "button");
            btn.setAttribute("class", "btn");
            btn.setAttribute("value","Delete");
            btn.setAttribute("id",btns);
            delBtnsTitle.push(btns);
            
            workSpace.appendChild(newTitle);
            workSpace.appendChild(btn);
            document.getElementById(name).focus()
        }
        
        function newHeading()
        {
            var name = "Title" + titles.length;
            var btns = "ButtonTitle" + delBtnsTitle.length;
            
            var newTitle = document.createElement('input');
            newTitle.setAttribute("type", "text")
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "title")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            titles.push(name)
            
            var btn = document.createElement('input');
            btn.setAttribute("type", "button");
            btn.setAttribute("class", "btn");
            btn.setAttribute("value","Delete");
            btn.setAttribute("id",btns);
            delBtnsTitle.push(btns);
            
            workSpace.appendChild(newTitle);
            workSpace.appendChild(btn);
            document.getElementById(name).focus()
        }
        
        function newText()
        {
            var name = "Text" + texts.length;
            var btns_text = "ButtonText" + delBtnsText.length;
            
            var newTitle = document.createElement('textarea');
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "text")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            texts.push(name)
            
            var btn = document.createElement('input');
            btn.setAttribute("type", "button");
            btn.setAttribute("class", "btn");
            btn.setAttribute("value","Delete");
            btn.setAttribute("id",btns_text);
            delBtnsText.push(btns_text);
            
            workSpace.appendChild(newTitle);
            workSpace.appendChild(btn);
            document.getElementById(name).focus()
        }  

        document.getElementById('title').onclick = function(){
            newTitle();
        }
        
        document.getElementById('text').onclick = function(){
            newText();
        }