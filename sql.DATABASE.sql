-- Create Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    
);

-- Create Products Table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    --najem nzid hajet
);

--  Reviews Table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ProductID INT,
    Rating INT,
    Comment TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Create Promotions Table
CREATE TABLE Promotions (
    PromotionID INT PRIMARY KEY AUTO_INCREMENT,
    PromoCode VARCHAR(20) NOT NULL,
    Discount DECIMAL(5, 2) NOT NULL,
   
);

--  Shopping Methods Table
CREATE TABLE ShoppingMethods (
    MethodID INT PRIMARY KEY AUTO_INCREMENT,
    MethodName VARCHAR(50) NOT NULL
    
);

-- Create Payment Methods Table
CREATE TABLE PaymentMethods (
    PaymentID INT PRIMARY KEY AUTO_INCREMENT,
    PaymentName VARCHAR(50) NOT NULL
    
);

--Orders Table
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ProductID INT,
    Quantity INT,
    TotalAmount DECIMAL(10, 2),
    PromotionID INT,
    ShoppingMethodID INT,
    PaymentMethodID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (PromotionID) REFERENCES Promotions(PromotionID),
    FOREIGN KEY (ShoppingMethodID) REFERENCES ShoppingMethods(MethodID),
    FOREIGN KEY (PaymentMethodID) REFERENCES PaymentMethods(PaymentID)
);
