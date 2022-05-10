alert("Welcome To HBL ATM")
var pin = parseInt(prompt("Enter Pin Code: "));
var balance = 2000;
if (pin == 1234) {
    var lang = parseInt(prompt("Press 2: English 1:اردو"))
    if (lang == 1) {
    var choice = parseInt(prompt("دبائیں 1:واپس لیں، 2:جمع کریں، 3:بیلنس چیک کریں"))
    switch (choice) {
        case 1:
            var amount = parseInt(prompt("اپنی مطلوبہ رقم درج کریں۔"))
            if (amount <= balance) {
                var newbalance = balance - amount;
                document.write("آپ کا نیا بیلنس ہے: " + newbalance)
            }
            else(
                document.write("ناکافی توازن")
            )
            break;
            
            case 2:
                var amount = parseInt(prompt("جمع کرنے کے لیے رقم درج کریں۔"))
                var newbalance = balance + amount;
                document.write("آپ کا نیا بیلنس ہے:" + newbalance);
                break;

                case 3:
                   document.write("آپ کا موجودہ بیلنس ہے۔" + balance)
                   break;
        default:
            document.write("دفعہ ہو جاو")
            break;
    }
    }
    if (lang == 2) {
        var choice = parseInt(prompt("Press 1: Withdraw, 2: Add, 3: Check Balance"))
        switch (choice) {
            case 1:
                var amount = parseInt(prompt("Enter The Balance You Want To Withdraw "))
                if (amount <= balance) {
                    var newbalance = balance - amount;
                    document.write("Your Current Balnce Is " + newbalance)
                }
                else(
                    document.write("Insufficent Balance")
                )
                break;
                
                case 2:
                    var amount = parseInt(prompt("Enter Amount To Add"))
                    var newbalance = balance + amount;
                    document.write("Your New Balnce Is:" + newbalance);
                    break;
    
                    case 3:
                       document.write("Your Current Balance Is" + balance)
                       break;
            default:
                document.write("Get Lost")
                break;
        }
        }
        else(
            document.write("Get Lost , دفعہ ہو جاو")
        )
}
else(
    document.write("Your Pin Code Is Invalid")
)