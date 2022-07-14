var images= 

["https://i.pinimg.com/originals/89/ec/16/89ec1614788e2a7b62ea2812ed41e83f.jpg",
"https://imagensemoldes.com.br/wp-content/uploads/2022/02/Arquivo-Desenho-Animado-Homem-de-Negocios-PNG-717x1024.png",
"https://i.pinimg.com/736x/f7/b9/d6/f7b9d6362d2d82e3213e84c6369410e4.jpg",
"https://i.pinimg.com/736x/64/14/2a/64142a62d82919881504e95c04bbe1aa.jpg",
"https://static.vecteezy.com/ti/vetor-gratis/p1/2426985-homem-de-negocios-personagem-de-desenho-animado-gr%C3%A1tis-vetor.jpg",
"https://i.pinimg.com/564x/0a/0e/d0/0a0ed00c7d0e58d25c386a1d585ffcc4.jpg"];


            var names=  ["Álbum de Família","Eric Pai","Vanessa Tia", 
        "Elizabeth Avó","Denys Tio","Bernardo Primo"];

            var i = 0;
            function update(){

                i++;
                var numbersOffMemberInArray = 5
                if (i > numbersOffMemberInArray) 
                 {
                     i = 0;
                 } 
                 var updatedImage = images[i];
                 var updatedName = names[i];
                 document.getElementById("familyMemberImage").src = updatedImage;
                 document.getElementById("familyMemberName").innerHTML = updatedName;
                
            }



    
