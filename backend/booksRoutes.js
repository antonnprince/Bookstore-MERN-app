import express from "express";
import { Book } from "./models/bookModel";
const router = express.router();

router.post('/books', async (request, response)=>{
    try{
        if (!request.body.title.trim() || !request.body.author.trim() || !request.body.publishYear) {
            return response.status(400).send({
                message: 'All fields are required',
            });
        }
        
            const newBook = {
                title: request.body.title,
                author: request.body.author,
                publishYear: request.body.publishYear
            };

            const book = await Book.create(newBook);

            return response.status(201).send(book);
    }
        catch(error){
            console.log(error.message);
            response.status(500).send({message: error.message});
        }
});

router.get('/books', async (request, response)=>{
    try{
        const books = await Book.find({}); //get all books

        return response.status(200).json({
            count: books.length,
            data: books
        })

    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});

    }
});

//get one book using id
router.get('/books/:id', async (request, response)=>{
    try{
        const {id} = request.params;

        const books = await Book.find(id); //get all books

        return response.status(200).json({books})

    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});

    }
});

//update a book
router.put('/books/:id', async (request, response)=>{
    try{
        if(  !request.body.title || !request.body.author || !request.body.publishYear)
            {
                return response.status(400).send({
                    message:'All fields are required',
                })
            }

        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body)
        
        if(!result){
            return response.status(404).json({message: 'Book not found'});
        }

        return response.status(200).send({message: 'Book updated successfully'})

    }catch(error){
        console.log(error) 
        response.status(500).send({message: error.message})
    }
})

//delete book
router.delete('/books/:id', async (request, response)=>{
    try{
        const {id} = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Book not found'});
        }

        return response.status(200).send({message: 'Book deleted successfully'})  
    }catch(error){
        console.log(error)
        response.status(500).send({message: error.message})
    }
});

export default router