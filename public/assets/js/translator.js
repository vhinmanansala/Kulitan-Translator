$(function(){
                      
                   
                        $('#ctype').change(function() {
                                 if($("#ctype").val() =='modified') {
                                       if($("#hide").val() == 'hide') {
                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").hide();
                                              $("#content-resultm1").show();
                                           } else {

                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").show();
                                              $("#content-resultm1").hide();
                                           }
                                  } else
                                     {
                                           if($("#hide").val() == 'hide') {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                              $("#content-result").hide();
                                             $("#content-result1").show();  
                                            } else 
                                                {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                             $("#content-result").show();
                                             $("#content-result1").hide();  
                                               }
                                      }
                                    
                             
                                    
                         });

                  
                             $('#hide').change(function() {


                                
                                 if($("#ctype").val() =='modified') {
                                       if($("#hide").val() == 'hide') {
                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").hide();
                                              $("#content-resultm1").show();
                                           } else {

                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").show();
                                              $("#content-resultm1").hide();
                                           }
                                  } else
                                     {
                                           if($("#hide").val() == 'hide') {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                              $("#content-result").hide();
                                             $("#content-result1").show();  
                                            } else 
                                                {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                             $("#content-result").show();
                                             $("#content-result1").hide();  
                                               }
                                      }
                                       
                              });


            
                var match  = ["a","e","i","o","u"];
                   
                                 
                $("#btn-clear").click(function(){
                       $("#content-result").html('');
                                       $("#content-result1").html('');
                                       $("#content-resultm").html('');
                                       $("#content-resultm1").html('');

                    $("#msg").html('');
                    $(".msg-cont").hide();
                    $("#search").val('').focus();   
                    $("#showbox").hide();
                });


                
                $("#search").keyup(function(e){


                                  if($("#ctype").val() =='modified') {
                                       if($("#hide").val() == 'hide') {
                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").hide();
                                              $("#content-resultm1").show();
                                           } else {

                                            $("#content-result").hide();
                                            $("#content-result1").hide();
                                             $("#content-resultm").show();
                                              $("#content-resultm1").hide();
                                           }
                                  } else
                                     {
                                           if($("#hide").val() == 'hide') {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                              $("#content-result").hide();
                                             $("#content-result1").show();  
                                            } else 
                                                {
                                             $("#content-resultm").hide();
                                             $("#content-resultm1").hide();
                                             $("#content-result").show();
                                             $("#content-result1").hide();  
                                               }
                                      }

                                         
                                       $("#content-result").html('');
                                       $("#content-result1").html('');
                                       $("#content-resultm").html('');
                                       $("#content-resultm1").html('');
                    
                    $("#msg").html('');
                    $(".msg-cont").hide();
                    
                                        var val = $(this).val().toLowerCase();    
                    var getMatch = 0;
                                                            
                    
                        setTimeout( function() {
                            jQuery('.msg-cont').hide();
                        }, 2000 );
                    
                        $.each(val,function(el,data){

  if('original'== 'original') 
  { 
             
                    var flag=false;
            var base ="a e i o u , .";
            var matchall=["a","e","i","o","u","ba","be","bi","bo","bu","da","de","di","do","du","ga","ge","gi","go","gu","ha","he","hi","ho","hu","ka","ke","ki","ko","ku","la","le","li",
            "lo","lu","ma","me","mi","mo","mu","na","ne","ni","no","nu","nga","nge","ngi","ngo","ngu","pa","pe","pi","po","pu","ra","re","ri","ro","ru","sa","se","si","so",
            "su","ta","te","ti","to","tu","wa","we","wi","wo","wu","ya","ye","yi","yo","yu",".",","," "];

                                                        
            var imgall=["a","e","e","o","o","ba","be","be","bo","bo","da","de","de","do","do","ga","ge","ge","go","go","ha","he","he","ho","ho","ka","ke","ke","ko","ko","la","le","le",
            "lo","lo","ma","me","me","mo","mo","na","ne","ne","no","no","nga","nge","nge","ngo","ngo","pa","pe","pe","po","po","da","de","de","do","do","sa","se","se","so",
            "so","ta","te","te","to","to","wa","we","we","wo","wo","ya","ye","ye","yo","yo","period","comma"];
            var nmatch="b c d f g h j k l m n p q r s t v w x y z";

                               
            var vmatch="a e i o u , .";
                        var mthree="nga,nge,ngi,ngo,ngu";
                                                var newval=val; 
                                                var len=1;
                                                var pos=0
                                                var cnt=newval.length+1;
                                                var prev="";  
                                                var tFound=-1; 
                                                var isFound=-1;
                                                var found=-1    
                                            
                                              while(len < cnt) {
                                                   tFound=-1; 
                                                   isFound=-1;
                                                   found=-1; 
                                                   var str=newval.substr(pos,len);
                                                   var nstr=newval.substr(pos+1,len);
                                                   var twstr=newval.substr(pos,len+1);
                                                   var tstr=newval.substr(pos,len+2);
                                                        
                                           if(e.keyCode >= 65 && e.keyCode <= 90){
                        ; //correct letters
                          } else {
                        if(e.keyCode == 32){
                            ;                                                     ;    
                                                          
                        } else {
                        
                        if(e.keyCode == 13 || e.keyCode == 8 ||e.keyCode == 190||e.keyCode == 188){
                            ;
                        }
                        else{
                                                       
                            result('You entered an unsupported character'+newval);
                            return false;
                        }
                                              }
                    }           
                                               
                                          // alert(newval);
                                                 switch(twstr) {
                                                                    case 'ca':
                                                                    case 'qa':
                                                                            result(" Try using Ka intstead of "+twstr);
                                                                            result1(" Try using Ka intstead of "+twstr);
                                                                            resultm(" Try using Ka intstead of "+twstr);
                                                                            resultm1(" Try using Ka intstead of "+twstr);  
                                                                            return false; 
                                                                            break; 
                                                                    case 'ce': 
                                                                    case 'qe':
                                                                            result(" Try using Ke intstead of "+twstr);
                                                                            result1(" Try using Ke intstead of "+twstr);
                                                                            resultm(" Try using Ke intstead of "+twstr);
                                                                            resultm1(" Try using Ke intstead of "+twstr);
                                                                     
                                                                            return false;  
                                                                             break;
                                                                    case 'ci':
                                                                    case 'qi':
                                                                              result(" Try using Ki intstead of "+twstr);
                                                                              result1(" Try using Ki intstead of "+twstr);
                                                                              resultm(" Try using Ki intstead of "+twstr);
                                                                              resultm1(" Try using Ki intstead of "+twstr);      
                                                                              return false; 
                                                                              break;
                                                                     case 'co':
                                                                     case 'qo':
                                                                              result(" Try using Ko intstead of "+twstr);
                                                                              result1(" Try using Ko intstead of "+twstr);
                                                                              resultm(" Try using Ko intstead of "+twstr);
                                                                              resultm1(" Try using Ko intstead of "+twstr);
                                                                            
                                      
                                                                              return false; 
                                                                              break;
                                                                    case 'cu': 
                                                                    case 'qu': 
                                                                             result(" Try using Ku intstead of "+twstr);
                                                                             result1(" Try using Ku intstead of "+twstr);
                                                                             resultm(" Try using Ku intstead of "+twstr);
                                                                             resultm1(" Try using Ku intstead of "+twstr); 
                                                                             return false;    
                                                                             break;
                                                                    case 'fa':
                                                                             result(" Try using Pa intstead of "+twstr);
                                                                             result1(" Try using Pa intstead of "+twstr);
                                                                             resultm(" Try using Pa intstead of "+twstr);
                                                                             resultm1(" Try using Pa intstead of "+twstr);     
                                                                             return false;   
                                                                             break;
                                                                    case 'fe':
                                                                             result(" Try using Pe intstead of "+twstr);
                                                                             result1(" Try using Pe intstead of "+twstr);
                                                                             resultm(" Try using Pe intstead of "+twstr);
                                                                             resultm1(" Try using Pe intstead of "+twstr);  
                                                                             return false;  
                                                                             break;   
                                                                    case 'fi':
                                                                             result(" Try using Pi intstead of "+twstr);
                                                                             result1(" Try using Pi intstead of "+twstr);
                                                                             resultm(" Try using Pi intstead of "+twstr);
                                                                             resultm1(" Try using Pi intstead of "+twstr);  
                                                                             return false; 
                                                                             break;
                                                                    case 'fo':
                                                                           result(" Try using Po intstead of "+twstr);
                                                                           result1(" Try using Po intstead of "+twstr);
                                                                           resultm(" Try using Po intstead of "+twstr);
                                                                           resultm1(" Try using Po intstead of "+twstr);  
                                                                           return false;   
                                                                           break;
                                                                    case 'fu': 
                                                                           result(" Try using Pu intstead of "+twstr);
                                                                           result1(" Try using Pu intstead of "+twstr);
                                                                           resultm(" Try using Pu intstead of "+twstr); 
                                                                           resultm1(" Try using Pu intstead of "+twstr);
                                                                           return false; 
                                                                           break;
                                                                   case 'ja':
                                                                            result(" Try using Ha or DiYa intstead of "+twstr);
                                                                              result1(" Try using Ha or DiYa intstead of "+twstr);
                                                                             resultm(" Try using Ha or DiYa intstead of "+twstr);
                                                                              resultm1(" Try using Ha or DiYa intstead of "+twstr); 
                                                                             return false; 
                                                                              break;      
                                                                    case 'je':
                                                                            result(" Try using He or DiYe intstead of "+twstr);
                                                                            result1(" Try using He or DiYe intstead of "+twstr);
                                                                            resultm(" Try using He or DiYe intstead of "+twstr);
                                                             resultm1(" Try using He or DiYe intstead of "+twstr);      
                                                                            return false; 
                                                                             break; 
                                                                    case 'ji':
                                                                             result(" Try using Hi or DiYi intstead of "+twstr);
                                                                             result1(" Try using Hi or DiYi intstead of "+twstr);
                                             resultm(" Try using Hi or DiYi intstead of "+twstr);
                                                                             resultm1(" Try using Hi or DiYi intstead of "+twstr);  
                                                                            return false; 
                                                                             break;
                                                                    case 'jo':
                                                                             result(" Try using Ho or DiYo intstead of "+twstr);
                                                                             result1(" Try using Ho or DiYo intstead of "+twstr);
                                                                             resultm(" Try using Ho or DiYo intstead of "+twstr);
                                                                             resultm1(" Try using Ho or DiYo intstead of "+twstr);  
                                                                             return false;  
                                                                         break;
                                                                    case 'ju': 
                                                                          result(" Try using Hu or DiYu intstead of "+twstr);
                                                                          result1(" Try using Hu or DiYu intstead of "+twstr);
                                                                          resultm(" Try using Hu or DiYu intstead of "+twstr);
                                                                          resultm1(" Try using Hu or DiYu intstead of "+twstr);
                                                                          return false; 
                                                                         break;

                                                                    case 'va':
                                                                            result(" Try using Ba  intstead of "+twstr);
                                                                            result1(" Try using Ba  intstead of "+twstr);
                                                                            resultm(" Try using Ba  intstead of "+twstr);
                                                                            resultm1(" Try using Ba  intstead of "+twstr);
                                                                            return false;   
                                                                            break;      
                                                                    case 've':
                                                                            result(" Try using Be intstead of "+twstr);
                                                                           result1(" Try using Be intstead of "+twstr);
                                                                           resultm(" Try using Be intstead of "+twstr);
                                                                           resultm1(" Try using Be intstead of "+twstr);
                                                                           
                                                                            return false; 
                                                                             break; 
                                                                    case 'vi':
                                                                            result(" Try using Bi intstead of "+twstr);
                                                                            result1(" Try using Bi intstead of "+twstr);
                                                                            resultm(" Try using Bi intstead of "+twstr);
                                                                            resultm1(" Try using Bi intstead of "+twstr);
                                                                             
                                                                            return false; 
                                                                             break;
                                                                    case 'vo':
                                                                             result(" Try using Bo intstead of "+twstr);
                                                                             result1(" Try using Bo intstead of "+twstr);
                                                                             resultm(" Try using Bo intstead of "+twstr);
                                                                             resultm1(" Try using Bo intstead of "+twstr);  
                                                                             return false;    
                                                                         break;
                                                                    case 'vu': 
                                                                        result(" Try using Bu intstead of "+twstr);result1(" Try using Bu intstead of "+twstr);resultm(" Try using Bu intstead of "+twstr);resultm1(" Try using Bu intstead of "+twstr);
                                                                       return false; 
                                                                         break;
                                                                    
                                                                      case 'xa':
                                                                            result(" Try using Ha or Sa instead "+twstr);result1(" Try using Ha or Sa instead "+twstr);resultm(" Try using Ha or Sa instead "+twstr);resultm1(" Try using Ha or Sa instead "+twstr);
                                                                              return false;   
                                                                              break;      
                                                                    case 'xe':
                                                                            result(" Try using He or Se instead "+twstr);result1(" Try using He or Se instead "+twstr);resultm(" Try using He or Se instead "+twstr);resultm1(" Try using He or Se instead "+twstr);
                                                                             return false; 
                                                                             break; 
                                                                    case 'xi':
                                                                            result(" Try using Hi or Si instead "+twstr);result1(" Try using Hi or Si instead "+twstr);resultm(" Try using Hi or Si instead "+twstr);resultm1(" Try using Hi or Si instead "+twstr);
                                                                              return false; 
                                                                             break;
                                                                    case 'xo':
                                                                             result(" Try using Ho or So instead "+twstr);result1(" Try using Ho or So instead "+twstr);resultm(" Try using Ho or So instead "+twstr);resultm1(" Try using Ho or So instead "+twstr);
                                                                         break;
                                                                    case 'xu': 
                                                                        result(" Try using Hu or Su instead "+twstr);result1(" Try using Hu or Su instead "+twstr);resultm(" Try using Hu or Su instead "+twstr);resultm1(" Try using Hu or Su instead "+twstr);
                                                                               return false; 
                                                                         break;
                                                                      case 'za':
                                                                            result(" Try using Sa instead "+twstr);result1(" Try using Sa instead "+twstr);resultm(" Try using Sa instead "+twstr);resultm1(" Try using Sa instead "+twstr);
                                                                             return false; 
                                                                              break;      
                                                                    case 'ze':
                                                                            result(" Try using Se instead "+twstr);result1(" Try using Se instead "+twstr);resultm(" Try using Se instead "+twstr);resultm1(" Try using Se instead "+twstr);
                                                                                 return false; 
                                                                             break; 
                                                                    case 'zi':
                                                                            result(" Try using Si instead "+twstr); result1(" Try using Si instead "+twstr); resultm(" Try using Si instead "+twstr); resultm1(" Try using Si instead "+twstr);
                                                                            return false;    
                                                                             break;
                                                                    case 'zo':
                                                                             result(" Try using So instead "+twstr);result1(" Try using So instead "+twstr);resultm(" Try using So instead "+twstr);resultm1(" Try using So instead "+twstr);
                                                                             return false;   
                                                                         break;
                                                                    case 'zu': 
                                                                        result(" Try using Su instead "+twstr);result1(" Try using Su instead "+twstr);resultm(" Try using Su instead "+twstr);resultm1(" Try using Su instead "+twstr);
                                                                         return false; 
                                                                         break; 
                                                                     
                                                                                                   
                                                                    
                                                                 }

                                                      switch(tstr) {
                                                                 case 'nga':
                                                                 case 'nge':
                                                                 case 'ngi':
                                                                 case 'ngo': 
                                                                  case 'ngu':    
                                                                  str=tstr;    
                                                                  newval=newval.substr(len+2,cnt);
                                                                  cnt=newval.length+1;
                                                                     found=1;
                                                             }  
                                                   if(found< 0) {
                                                  switch(str){
                                                            case 'a':
                                                            case 'e':
                                                            case 'i':
                                                            case 'o':
                                                            case 'u':
                                                            case '.':
                                                            case ',':
                                                                        str=newval.substr(pos,len);
                                                                        newval=newval.substr(len,cnt);
                                                                        cnt=newval.length+1;
                                                                        break;  
                                                           case  'b': case 'c': case 'd': case 'f': case 'g': case  'h': case 'j': case 'k':
                                                           case 'l': case 'm': case 'n': case 'p': case 'q': case 'r': case 's': case 't':
                                                           case 'v': case  'w': case 'x': case 'y': case 'z':
                                                                                  
                                                                                       while((str==nstr)&&(len < cnt)) {
                                                                                               newval=newval.substr(len,cnt);
                                                                                               str=newval.substr(pos,len);
                                                                                               nstr=newval.substr(pos+1,len);
                                                                                               cnt=newval.length+1;
                                                                                            }
                                                                                        
                                                                                     if((nstr=="a")||(nstr=="e")||(nstr=="i")||(nstr=="o")||(nstr=="u")) {
                                                                                          
                                                                                            str=str+nstr;
                                                                                            newval=newval.substr(len+1,cnt);
      
                                                                                             cnt=newval.length+1;
                                                                                     } else {
                                                                                               
                                                                                             newval=newval.substr(len,cnt);
                                                                                             cnt=newval.length+1;
                                                                                             continue;   
                                                                                           
                                                                                           }   
                                                                                    
                                                                                   break;
                                                           case ' ':   
                                                                      
                                                                       newval=newval.substr(len,cnt);
                                                                         
                                                                       
                                                                      
                                                            }

                                              
                                                   }

                                             
                                               
                                                       
                                                   for(var k=0; k < matchall.length; k++) {
                                                                 if(str==matchall[k]) {
                                                                   

                                                                     
                                                                        result(img(imgall[k])+matchall[k]);
                                                                        result1(img(imgall[k]));
                                                                      
                                                                     //    result(img(imgall[k])+matchall[k]);
                                                                        
                                     flag=true;
                                                                         found=-1;  
                                                                       } 
                                                          }
                                                          if(flag==true) {
                                                                
                                                               
                                                               
                                                               len=1;
                                                               pos=0;
                                                               flag=false;
                                                                 
                                                          } else {

                                                                          
                                                                   
                                                              len++;
                                                             
                                                             
                                                          }
                                                           
                                                                        

                                                         
                                                  } 
                                                 // $("#showbox").show();
                                                // return false;

   }
 if('m'=='m') 
  { 
                    
                     

            var flag=false;
            var base ="a b c d e f g h i j k l m n o p q r s t u v w x y z , .";
            var matchall=["a","e","i","o","u","b","ba","be","bi","bo","bu","d","da","de","di","do","du","g","ga","ge","gi","go","gu","h","ha","he","hi","ho","hu","k","ka","ke","ki","ko","ku","l","la","le","li",
            "lo","lu","m","ma","me","mi","mo","mu","n","na","ne","ni","no","nu","ng","nga","nge","ngi","ngo","ngu","p","pa","pe","pi","po","pu","r","ra","re","ri","ro","ru","s","sa","se","si","so",
            "su","t","ta","te","ti","to","tu","w","wa","we","wi","wo","wu","y","ya","ye","yi","yo","yu",".",","," "];

                                                        
            var imgall=["a","e","e","o","o","b","ba","be","be","bo","bo","d","da","de","de","do","do","g","ga","ge","ge","go","go","h","ha","he","he","ho","ho","k","ka","ke","ke","ko","ko","l","la","le","le",
            "lo","lo","m","ma","me","me","mo","mo","n","na","ne","ne","no","no","ng","nga","nge","nge","ngo","ngo","p","pa","pe","pe","po","po","d","da","de","de","do","do","s","sa","se","se","so",
            "so","t","ta","te","te","to","to","w","wa","we","we","wo","wo","y","ya","ye","ye","yo","yo","period","comma"];
            var nmatch="b,d,g,h,j,k,l,m,n,p,r,s,t,w,y";
            var vmatch="a e i o u";
                        var mthree="nga,nge,ngi,ngo,ngu";
                         
                                                var newval=val; 
                                                var len=1;
                                                var pos=0
                                                var cnt=newval.length+1;
                                                var prev="";  
                                                 var found=-1;
                                                 var isFound=-1;  
                                                  var tFound=-1;
                                              while(len < cnt) {
                                                   found=-1;
                                                   isFound=-1;  
                                                   tFound=-1; 
                                                   var str=newval.substr(pos,len);
                                                   var nstr=newval.substr(pos+1,len);
                                                    var twstr=newval.substr(pos,len+1); 
                                                   var tstr=newval.substr(pos,len+2);      
                                           if(e.keyCode >= 65 && e.keyCode <= 90){
                        ; //correct letters
                          } else {
                        if(e.keyCode == 32){
                            ;
                        } else {
                        
                        if(e.keyCode == 13 || e.keyCode == 8 ||e.keyCode == 190||e.keyCode == 188){
                            ;
                        }
                        else{
                                                       
                            result('You entered an unsupported character'+newval);
                            return false;
                        }
                                              }
                    }   


                                                switch(twstr) {
                                                                    case 'ca':
                                                                    case 'qa':
                                                                            result(" Try using Ka intstead of "+twstr); result1(" Try using Ka intstead of "+twstr); resultm(" Try using Ka intstead of "+twstr); resultm1(" Try using Ka intstead of "+twstr);
                                                                            return false;
                                                                            break; 
                                                                    case 'ce': 
                                                                    case 'qe':
                                                                            result(" Try using Ke intstead of "+newval);result1(" Try using Ke intstead of "+newval);resultm(" Try using Ke intstead of "+newval);resultm1(" Try using Ke intstead of "+newval);
                                                                            return false;
                                                                             break;
                                                                    case 'ci':
                                                                    case 'qi':
                                                                              result(" Try using Ki intstead of "+newval);result1(" Try using Ki intstead of "+newval);resultm(" Try using Ki intstead of "+newval);resultm1(" Try using Ki intstead of "+newval);
                                                                              return false;
                                                                              break;
                                                                     case 'co':
                                                                     case 'qo':
                                                                              result(" Try using Ko intstead of "+newval); result1(" Try using Ko intstead of "+newval); resultm(" Try using Ko intstead of "+newval); resultm1(" Try using Ko intstead of "+newval);
                                                                             return false;
                                                                    case 'cu': 
                                                                    case 'qu': 
                                                                             result(" Try using Ku intstead of "+newval);result1(" Try using Ku intstead of "+newval);resultm(" Try using Ku intstead of "+newval);resultm1(" Try using Ku intstead of "+newval);
                                                                            return false;
                                                                    case 'fa':
                                                                             result(" Try using Pa intstead of "+newval); result1(" Try using Pa intstead of "+newval); resultm(" Try using Pa intstead of "+newval); resultm1(" Try using Pa intstead of "+newval);
                                                                            return false;
                                                                    case 'fe':
                                                                             result(" Try using Pe intstead of "+newval);result1(" Try using Pe intstead of "+newval);resultm(" Try using Pe intstead of "+newval);resultm1(" Try using Pe intstead of "+newval);
                                                                            return false;   
                                                                    case 'fi':
                                                                             result(" Try using Pi intstead of "+newval);result1(" Try using Pi intstead of "+newval);resultm(" Try using Pi intstead of "+newval);resultm1(" Try using Pi intstead of "+newval);
                                                                            return false;
                                                                    case 'fo':
                                                                           result(" Try using Po intstead of "+newval);result1(" Try using Po intstead of "+newval);resultm(" Try using Po intstead of "+newval);resultm1(" Try using Po intstead of "+newval);
                                                                          return false;
                                                                    case 'fu': 
                                                                           result(" Try using Pu intstead of "+newval);result1(" Try using Pu intstead of "+newval);resultm(" Try using Pu intstead of "+newval);resultm1(" Try using Pu intstead of "+newval);
                                                                          return false;
                                                                    case 'ja':
                                                                            result(" Try using Ha or DiYa intstead of "+newval);result1(" Try using Ha or DiYa intstead of "+newval);resultm(" Try using Ha or DiYa intstead of "+newval);resultm1(" Try using Ha or DiYa intstead of "+newval);
                                                                             return false;      
                                                                    case 'je':
                                                                            result(" Try using He or DiYe intstead of "+newval);result1(" Try using He or DiYe intstead of "+newval);resultm(" Try using He or DiYe intstead of "+newval);resultm1(" Try using He or DiYe intstead of "+newval);
                                                                            return false; 
                                                                    case 'ji':
                                                                            result(" Try using Hi or DiYi intstead of "+newval);
                                                                             result1(" Try using Hi or DiYi intstead of "+newval); resultm(" Try using Hi or DiYi intstead of "+newval); resultm1(" Try using Hi or DiYi intstead of "+newval);
                                                                            return false;
                                                                    case 'jo':
                                                                             result(" Try using Ho or DiYo intstead of "+newval);result1(" Try using Ho or DiYo intstead of "+newval);resultm(" Try using Ho or DiYo intstead of "+newval);resultm1(" Try using Ho or DiYo intstead of "+newval);
                                                                        return false;
                                                                    case 'ju': 
                                                                        result(" Try using Hu or DiYu intstead of "+newval);result1(" Try using Hu or DiYu intstead of "+newval);resultm(" Try using Hu or DiYu intstead of "+newval);resultm1(" Try using Hu or DiYu intstead of "+newval);
                                                                        return false;

                                                                      case 'va':
                                                                            result(" Try using Ba  intstead of "+newval);result1(" Try using Ba  intstead of "+newval);resultm(" Try using Ba  intstead of "+newval);resultm1(" Try using Ba  intstead of "+newval);
                                                                             return false;      
                                                                    case 've':
                                                                            result(" Try using Be intstead of "+newval); result1(" Try using Be intstead of "+newval); resultm(" Try using Be intstead of "+newval); resultm1(" Try using Be intstead of "+newval);
                                                                            return false; 
                                                                    case 'vi':
                                                                            result(" Try using Bi intstead of "+newval);result1(" Try using Bi intstead of "+newval);resultm(" Try using Bi intstead of "+newval);resultm1(" Try using Bi intstead of "+newval);
                                                                            return false;
                                                                    case 'vo':
                                                                             result(" Try using Bo intstead of "+newval);result1(" Try using Bo intstead of "+newval);resultm(" Try using Bo intstead of "+newval);resultm1(" Try using Bo intstead of "+newval);
                                                                        return false;
                                                                    case 'vu': 
                                                                        result(" Try using Bu intstead of "+newval);result1(" Try using Bu intstead of "+newval);resultm(" Try using Bu intstead of "+newval);resultm1(" Try using Bu intstead of "+newval);
                                                                        return false;
                                                                    
                                                                      case 'xa':
                                                                            result(" Try using Ha or Sa instead "+newval);result1(" Try using Ha or Sa instead "+newval);resultm(" Try using Ha or Sa instead "+newval);resultm1(" Try using Ha or Sa instead "+newval);
                                                                             return false;      
                                                                    case 'xe':
                                                                            result(" Try using He or Se instead "+newval);result1(" Try using He or Se instead "+newval);resultm(" Try using He or Se instead "+newval);resultm1(" Try using He or Se instead "+newval);
                                                                            return false; 
                                                                    case 'xi':
                                                                            result(" Try using Hi or Si instead "+newval);result1(" Try using Hi or Si instead "+newval);resultm(" Try using Hi or Si instead "+newval);resultm1(" Try using Hi or Si instead "+newval);
                                                                            return false;
                                                                    case 'xo':
                                                                             result(" Try using Ho or So instead "+newval);result1(" Try using Ho or So instead "+newval);resultm(" Try using Ho or So instead "+newval);resultm1(" Try using Ho or So instead "+newval);
                                                                        return false;
                                                                    case 'xu': 
                                                                        result(" Try using Hu or Su instead "+newval);result1(" Try using Hu or Su instead "+newval);resultm(" Try using Hu or Su instead "+newval);resultm1(" Try using Hu or Su instead "+newval);
                                                                        return false;
                                                                      case 'za':
                                                                            result(" Try using Sa instead "+newval);result1(" Try using Sa instead "+newval);resultm(" Try using Sa instead "+newval);resultm1(" Try using Sa instead "+newval);
                                                                             return false;      
                                                                    case 'ze':
                                                                            result(" Try using Se instead "+newval);result1(" Try using Se instead "+newval);resultm(" Try using Se instead "+newval);resultm1(" Try using Se instead "+newval);
                                                                            return false; 
                                                                    case 'zi':
                                                                            result(" Try using Si instead "+newval);result1(" Try using Si instead "+newval);resultm(" Try using Si instead "+newval);resultm1(" Try using Si instead "+newval);
                                                                            return false;
                                                                    case 'zo':
                                                                             result(" Try using So instead "+newval);result1(" Try using So instead "+newval);resultm(" Try using So instead "+newval);resultm1(" Try using So instead "+newval);
                                                                        return false;
                                                                    case 'zu': 
                                                                        result(" Try using Su instead "+newval);result1(" Try using Su instead "+newval);resultm(" Try using Su instead "+newval);resultm1(" Try using Su instead "+newval);
                                                                        return false;

                                                                     
                                                                 }

                                              
                                                  switch(str) {
                                                                    case 'j':
                                                                           result(" No reason to use J ");
                                                                           result1(" No reason to use J ");resultm(" No reason to use J ");resultm1(" No reason to use J ");  
                                                                           return false; 
                                                                    case 'c':
                                                                            result(" Try using K intstead of "+str);result1(" Try using K intstead of "+str);resultm(" Try using K intstead of "+str);resultm1(" Try using K intstead of "+str);
                                                                             return false;
                                                                    case 'f':
                                                                            result(" Try using P intstead of "+str); result1(" Try using P intstead of "+str); resultm(" Try using P intstead of "+str); resultm1(" Try using P intstead of "+str);
                                                                             return false;

                                                                   case 'q':
                                                                            result(" Try using K intstead of "+str);result1(" Try using K intstead of "+str);resultm(" Try using K intstead of "+str);resultm1(" Try using K intstead of "+str);
                                                                             return false;


                                                                     case 'v':
                                                                            result(" Try using B intstead of "+str);result1(" Try using B intstead of "+str);resultm(" Try using B intstead of "+str);resultm1(" Try using B intstead of "+str);
                                                                            return false;
                                                                    case 'x':
                                                                            result(" Try using Ha or Sa instead "+str);result1(" Try using Ha or Sa instead "+str);resultm(" Try using Ha or Sa instead "+str);resultm1(" Try using Ha or Sa instead "+str);
                                                                             return false; 

                                                                    case 'z':
                                                                            result(" Try using S instead "+str);result1(" Try using S instead "+str);resultm(" Try using S instead "+str);resultm1(" Try using S instead "+str);
                                                                            return false;   

                                                              }     
                                                  
                                               switch(tstr) {
                                                                 case 'nga':
                                                                 case 'nge':
                                                                 case 'ngi':
                                                                 case 'ngo': 
                                                                  case 'ngu':    
                                                                  str=tstr;    
                                                                  newval=newval.substr(len+2,cnt);
                                                                  cnt=newval.length+1;
                                                                     found=1;
                                                             }  
                                                   if(found< 0) {
                                                  switch(twstr){
                                                             case 'ba':
                                                             case 'da':
                                                             case 'ga':
                                                             case 'ha':
                                                             case 'ja':
                                                             case 'ka': case 'la': case 'ma': case 'na': case 'pa': case 'ra': case 'sa': case 'ta':case 'wa': case 'ya':
                                                             case 'be':
                                                             case 'de':
                                                             case 'ge':
                                                             case 'he':
                                                             case 'je':
                                                             case 'ke': case 'le': case 'me': case 'ne': case 'pe': case 're': case 'se': case 'te':case 'we': case 'ye':
                                                             case 'bi':
                                                             case 'di':
                                                             case 'gi':
                                                             case 'hi':
                                                             case 'ji':
                                                             case 'ki': case 'li': case 'mi': case 'ni': case 'pi': case 'ri': case 'si': case 'ti':case 'wi': case 'yi':
                                                             case 'bo':
                                                             case 'do':
                                                             case 'go':
                                                             case 'ho':
                                                             case 'jo':
                                                             case 'ko': case 'lo': case 'mo': case 'no': case 'po': case 'ro': case 'so': case 'to':case 'wo': case 'yo':
                                                             case 'bu':
                                                             case 'du':
                                                             case 'gu':
                                                             case 'hu':
                                                             case 'ju':
                                                             case 'ku': case 'lu': case 'mu': case 'nu': case 'pu': case 'ru': case 'su': case 'tu':case 'wu': case 'yu':
                                                             case 'ng': 
                                                             str=newval.substr(pos,len+1); 
                                                             newval=newval.substr(len+1,cnt);
                                                             cnt=newval.length+1;
                                                              found=1;
                                                             break;  

                                                            }
                                                     }
                                                
                                                   if(found< 0) {
                                                  switch(str){
                                                            case 'a':
                                                            case 'e':
                                                            case 'i':
                                                            case 'o':
                                                            case 'u':
                                                            case '.':
                                                            case ',':
                                                            case 'b':
                                                            case 'd':
                                                            case 'g':
                                                            case 'h':
                                                            case 'j':
                                                            case 'k': case 'l': case 'm': case 'n': case 'p': case 'r': case 's': case 't':case 'w': case 'y':

                                                            
                                                                         str=newval.substr(pos,len);
                                                                        newval=newval.substr(len,cnt);
                                                                        cnt=newval.length+1;
                                                                        
                                                                        break;  
                                                         
                                                           case ' ':   
                                                                      
                                                                       newval=newval.substr(len,cnt);
                                                             
                                                                                 
                                                                      
                                                            }

                                              
                                                   }
                                                   
                                                                              
                                                   for(var k=0; k < matchall.length; k++) {
                                                                 if(str==matchall[k]) {

                                                                     
                                                                        resultm(img(imgall[k])+matchall[k]);
                                                                        resultm1(img(imgall[k]));
                                                                      
                                                                         flag=true;
                                                                                
                                                                     } 
                                                          }
                                                                                                                                                                   
                                           
                                                           if(flag==true) {
                                                               len=1;
                                                               pos=0;
                                                               flag=false;
                                                                 
                                                          } else {

                                                                          
                                                                   
                                                              len++;
                                                             
                                                             
                                                          }
                                                           
                                                                        

                                                         
                                                  } 
                                                 // $("#showbox").show();
                                                 return false;

   }

                        });     
                }); 

                            function result(data){
                    $("#content-result").append(data);
                                      
                }
                                function result1(data1){
                    $("#content-result1").append(data1);
                }
                               
                               function resultm(datam){
                    $("#content-resultm").append(datam);
                }
                                function resultm1(datam1){
                    $("#content-resultm1").append(datam1);
                }
                       function img(src){
                    return '<img src="images/'+src+'.gif" />';                  
                }
                
                  
            });