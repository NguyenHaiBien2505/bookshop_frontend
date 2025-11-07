import React from "react";
import BookProps from "./components/BookProps";
import Book from "../models/Book";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 2,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://cf.shopee.vn/file/88ab2a247c443ccd54f81afd2c76b298',
        },
        {
            id: 3,
            title: 'Book 1',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 4,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 5,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 6,
            title: 'Book 1',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 7,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        {
            id: 8,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_05_08/bia-sach2-9886.jpg',
        },
        
    ];
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                            <BookProps key={book.id}  book={book} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default List;