const translator =  require('./index');


describe('translate',()=>{

    describe('when pass hello',()=>{
        const input = "hello"
        it('response with ellohay',()=>{
            const result = translator(input);
            expect(result).toEqual("ellohay")
        });
    })
    describe('when pass word',()=>{
        const input = "word"
        it('response with ordway',()=>{
            const result = translator(input);
            expect(result).toEqual("ordway")
        });
    })
    describe('when pass hello world',()=>{
        const input = "hello world"
        it('response with ellohay orldway',()=>{
            const expectedResult = "ellohay orldway";
            const result = translator(input);
            expect(result).toEqual(expectedResult)
        });
    })

    describe('when pass string with capital letter',()=>{
        const input = "Hello World"
        const expectedResult = "Ellohay Orldway"
        it('maintains it',()=>{
          const result = translator(input);
          expect(result).toEqual(expectedResult)  
        })
    })

    describe('when pass string with lower and upper case and puntuaction',()=>{
        const input = "Hello, world!"
        const expectedResult = "Ellohay, orldway!"
        it('maintains it',()=>{
          const result = translator(input);
          expect(result).toEqual(expectedResult)  
        })
    })

    describe('when the word start with vocal',()=>{
        const input = "eat";
        it('just only add "ay" at the finish of word',()=>{
            const result = translator(input);
            expect(result).toEqual("eatay")
        })
    })
    
})
