# AngularCourse Project

## Module in angular

Module là 1 class dùng để đóng gói 1 chức năng cụ thể của ứng dụng.

Có nhiều loại module ví dụ như:
BrowserModule: được sử dụng ở trên chứa tất cả các dependencies(Các gói thư viện thì node_module sử dụng cho ứng dụng) cần thiết để chạy angular trên trình duyệt.

Nếu xét về mối quan hệ giữa module và component thì module giống như 1 group của component quản lý các component. 1 module có thể quản lý nhiều component và mỗi component phải được quản lý bởi 1 module nào đó

app.module là nơi bắt đầu khởi chạy của ứng dụng. Nó gọi là module gốc và nó chứa 1 component gốc là app.component

cú pháp tạo module:

```sh
ng g module [module name]
```

## Component in angular

Component biểu diễn 1 phần UI của website(file.html)

Nói 1 cách đơn giản 1 component là 1 thẻ html do mình tự định nghĩa, trong thẻ đó chứa nội dung html do mình biên soạn

1 component bao gồm:
Giao diện html
CSS của giao diện html đó
Selector(tên thẻ component do ta tự đặt)
Ngoài ra chứa 1 class javascript để xứ lý cho component đó và được export ra ngoài

Cú pháp tạo component:

```sh
ng g component [component name]
```
