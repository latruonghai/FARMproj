import deteModul from "./images/det_modules.png";
import fullApp from "./images/app.png";
import ferModule from "./images/fer_module.png";
import linkUpload from "./images/upload_link.png";
import imgUpload from "./images/upload_img.png";
import preProcess from "./images/preprocess.png";

const guideLines: any = {
    "heading1": "Hướng dẫn sử dụng",
    "paragraphs": [
        {
        "heading2": "Mô tả giao diện",
        "content":[
            {
                "paragraph":"Giao diện như hình bên dưới với phân chính là nền màu xanh. Nhìn hình bên dưới, ô bên trái ngoài cùng sẽ là nơi ảnh cần xử lý sẽ được tải lên. Kế đến ô ở giữa sẽ chứa ảnh kết quả, trong trường hợp không có kết quả, ảnh kết quả sẽ là ảnh ban đầu. Bên phải ngoài cùng sẽ là danh sách những khuôn mặt trong hình ảnh tải lên và nhãn cảm xúc tương ứng, cùng với độ tin cậy và thời gian mô hình xử lý cho mỗi khuôn mặt.",
                "image": fullApp,
            },
        ]
    },
        {
        "heading2": "Chức năng chính",
        "content": [{
            "paragraph": "Trong đoạn này bao gồm những chức năng chính sau: chọn module phát hiện khuôn mặt, chọn module phân loại cảm xúc, tải lên ảnh, chọn nhánh tiền xử lý dữ liệu, nhận biết cảm xúc",
            "image": "",
        },
    ]

    },
    {
        "heading2": "Phát hiện khuôn mặt",
        "content":[
            {
                "paragraph":"Đây là chức năng chọn module phát hiện khuôn mặt cho ứng dụng. Có 3 modules chính như mô tả ở hình bên dưới. Bạn có thể chọn 1 trong 3 modules để chọn bước phát hiện khuôn mặt cho ứng dụng. Nếu không chọn, mặc định của nó sẽ là module BlazeFace.",
                "image": deteModul,
            },
            {
                "paragraph":"Việc chọn những module phát hiện khuôn mặt khác nhau có thể đa dạng được điều kiện cũng như môi trường ảnh"
            }
        ]
    },
    {
        "heading2": "Module phân loại cảm xúc",
        "content":[
            {
                "paragraph":"Tương tự như module phát hiện khuôn mặt. Đây là chức năng chọn module phân loại cảm xúc cho ứng dụng. Có 4 modules chính như mô tả ở hình bên dưới. Tùy chỉnh bằng cách nhấn chọn giữa các module. Nếu không chọn, mặc định của nó sẽ là module CNN_minimum.",
                "image": ferModule,
            },
            {
                "paragraph":"Tùy thuốc vào nhu cầu bài toán, ta chọn module cho phù hợp"
            }
        ]
    },
    {
        "heading2": "Chọn tiền xử lý dữ liệu",
        "content":[
            {
                "paragraph":"Trong một số trường hợp, những vùng ảnh khuôn mặt có thể không rõ nét mặt dẫn đến cử chỉ khuôn mặt không được nêu rõ, vì thế dễ dàng khiến mô hình nhận diện sai lầm cảm xúc. Việc áp dụng bước tiền xử lý cho những khuôn mặt không rõ nét góp phần tăng độ chính xác cho bộ phân lớp. Bạn có thể chọn hoặc không, mặc định sẽ là không có bước tiền xử lý",
                "image": preProcess,
            },
        ]
    },
    {
        "heading2": "Tải lên ảnh",
        "content":[
            {
                "paragraph":"Đây là chức năng chính của ứng dụng, bạn thực hiện tải lên ảnh tại ô như hình mô tả bên dưới. Ảnh tải lên phải là ảnh chứa ít nhất một người",
                "image": imgUpload,
            },
        ]
    },
    {
        "heading2": "Tải ảnh lên bằng link ảnh",
        "content":[
            {
                "paragraph":"Ngoài bước tải ảnh thủ công, bạn có thể dán ảnh vào ô chứa link ảnh (hình bên dưới). Ứng dụng sẽ thực hiện tải ảnh của bạn từ link đó. Link ảnh yêu cầu phải là link ảnh của định dạng 'jpeg'",
                "image": linkUpload,
            },
        ]

    },
    
    ]
}
export{
    guideLines
}