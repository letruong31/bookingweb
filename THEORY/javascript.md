<!--  LÝ THUYẾT JAVASCRIPT : -->

 (1) <!-- CÁC HÀM TRONG JS --> (function):
   _ Quy tắc đặt tên hàm :  từ a --> z,
                            từ A --> Z,
                            từ 0 --> 9,
                            chứa được _ và $,
                            không được đặt số ở kí tự đầu tiên

   _ Tạo hàm đầu tiên : function tên hàm tự định nghĩa() {
                                  alert(...);
                                  }
                      hàm chỉ thực thi khi được gọi tên : tên hàm tự định nghĩa();            
   * alert(...) :                                                         hiện lên cửa sổ thông báo , tại một thời điểm chỉ hiển thị được một 
                                                                            biến thôi.
   * console.log(...) :                                                   in ra nội dung bên táp console.
     ...    .warn(...) :                                                  in ra cảnh báo màu vàng.
     ...    .error(...) :                                                 in ra cảnh báo màu đỏ lỗi.
   * confirm('...') :                                                     tạo ra hộp thoại xác nhận.
   * prompt(...) :                                                        tạo ra hộp thoại xác nhận trong đó có ô input để viết.
   * setTimeout(function(...) { hàm('...') },thời gian ):                 cho một đoạn code được chạy sau một khoảng thời gian được ấn định.  
   * setInterval(function(...) { hàm('...' + hàm(...)) },thời gian ):     cho một đoạn code chạy liên tục không ngừng sau một khoảng thời gian 
                                                                            được ấn định. Có thể cộng thêm các hàm khác.


 (2) <!-- TOÁN TỬ TRONG JS --> 
   * Toán tử số học :  +    ---> cộng            
                       -    ---> trừ                        
                       *    ---> nhân                        
                       **   ---> nhân lũy thừa              
                       /    ---> chia                      
                       %    ---> chia lấy dư               
                       ++   ---> tăng 1 giá trị số
                       --   ---> giảm 1 gái trị số

   * Toán tử gán :   toán tử            ví dụ            tương đương 
                       +=              a += b            a = a + b
                       -=              a -= b            a = a - b
                       *=              a *= b            a = a * b
                       /=              a /= b            a = a / b
                       **=             a **= b           a = a ** b

   * Toán tử ++ và -- :
      _Định nghĩa :   ++a và --a là tiền tố vì ++ và -- đứng trước a.
                      a-- và a++ là hậu tố vì ++ và -- đứng sau a.
      - Trong trường hợp tiền tố thì khi in ra nó sẽ cộng 1 với a trước thành a + 1.
      - Trong trường hợp hậu tố thì khi in ra nó sẽ in ra biến a copi trước rồi mới cộng với 1.
      <!-- ví dụ : (1) cho var a = 6 ; 
                      var b = a++ + --a ;
                               6  + 6
                      console.log(b); // 12  
              (2) cho var e = 10 ;
                      var r = ++e * 2 - e-- * 2 ;
                               11 * 2 - 11  * 2             
                      console.log(r); // 0 
      -->

   * Toán tử so sánh : dùng câu lệnh if và else theo mẫu :
                if(...) {
                  nếu điều kiện trong ngoặc tròn đúng thì chạy lệnh này;
                }  else {
                  nếu điều kiện trong ngoặc sai thì chạy lệnh này;
                }  ; 
          <!-- - có 6 giá trị sau (0 , NuN , null , undefined , chuỗi rỗng ' '_ " " và false ) khi đưa vào if thì luôn luôn là sai còn ngoài 6 giá trị này thì luôn luôn đúng.       -->
                
       ==     --->   bằng 
       ===    --->   bằng tuyệt đối cả giá trị và kiểu dữ liệu (ví dụ như number và string đều có giá trị giống nhau).  
       !=     --->   không bằng
       !==    --->   không bằng tuyệt đối.
       >      --->   lớn hơn 
       <      --->   nhỏ hơn
       >=     --->   lớn hơn hoặc bằng 
       <=     --->   nhỏ hơn hoặc bằng 
                           
   * Toán tử logic :      &&   -    và         (and)      (cần cả hai hoặc tất cả các vế đúng). 
       <!-- _ví dụ :  var a = 1;
                      var b = 2;
                      var reset = 'A' && 'B' && 'C' && 'D';
                      if(reset) {
                            console.log('đúng mẹ rồi');
                      } else {
                      console.log('sai nhé');
                      } ;
          - Xét từ trái sang phải nếu tất cả giá trị trong reset đều đúng (không nằm trong 6 trường hợp : 0 , ' ', NaN , null , undefined , false) thì nó sẽ lấy giá trị cuối cùng để gán vào biến nên biến reset có giá trị là true , mà nếu biến có giá trị là true thì hiển nhiên biểu thức if là đúng vì thế sẽ log ra là 'đúng mẹ rồi'. 
          -Nếu trong reset có một giá trị sai thì nó sẽ lấy luôn giá trị sai đó để gán cho biến và hiển nhiên if sẽ sai là false , mà nếu if(false) thì sẽ log ra 'sai nhé'.         
       -->
                          ||   -    hoặc       (or)       (cần một vế trong phép so sánh đúng là được).
       <!-- Ngược lại với toán tử && , toán tử || xét từ trái sang phải chỉ cần một giá trị trong reset đúng nó sẽ lấy luôn giá trị đó gán luôn cho biến mà ko quân tâm đến các giá trị phía sau .  
       -->
                          !    -    phủ định   (not)      (ngược lại điều kiện đưa ra là được).         


 (3) <!-- KIỂU DỮ LIỆU TRONG JS -->
   * Dữ liệu nguyên thủy - Primitive data 
    - number :    kiểu số liệu.
    - string :    kiểu văn bản chuỗi.
    - boolean :   kiểu đúng sai (true và false). Thường thường để thể hiện giá trị boolean thì khi khai biến thì thường đặt chữ is đằng trước. 
    - undefined : định nghĩa ra một biến nhưng không gán giá trị cho nó thì đó là undefined.
    - null :      nothing là không có gì. 
    - symbol :    có đặc tính duy nhất (unique). 
   * Dữ liệu phức tạp - Complex data
    - function :  
      <!-- _ví dụ :  var myFunction = function () {
        alert('...');
      } ;
      -->
        Khi định nghĩa ra một function như này thì function vẫn chưa được chạy ,chúng ra phải gọi function ra như sau thì câu lệnh mới được thực thi:        myFunction();
           
    - object : 
       _object : có thể chứa được rất nhiều dạng dữ liệu trong đó .
        <!-- _ví dụ :  var myObject = {
             name : 'trường',
             age : 18,
             adress : 'ha noi',
             myFunction : function () {
                    ....
             }
            };
         console.log(myObject);
       -->

       _array : không cần định nghĩa mà đã được đánh số từ 0 đến bao nhiêu đó. Sử dụng dấu ngoặc [] chứ không dùng dấu ngoặc {}.
       <!-- _ví dụ : var = myArray = [
               'ha noi',
               'hai phong',
               'hai duong'
              ];
           console.log(myArray);     
        -->

    - các kiểm tra các kiểu dữ liệu :
      console.log(typeof tên biến);
       _ riêng null thì không kiểm tra được , đây coi như là lỗi của js.


 (4) <!-- DOM --> (Document Object Model)
   * Có 3 thành phần chính : - 1 : element 
                             - 2 : attribute
                             - 3 : text 


 (5) <!-- VÒNG LẶP TRONG JS --> (loop)

 event loop 
 đồng bộ và bất đồng bộ 
 promis


   
 



      

      
          


                          