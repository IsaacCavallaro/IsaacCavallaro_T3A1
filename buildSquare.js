function generateShape(integer){
  
    let board = ""

    for (let x = 0; x < integer; x++ ){
    
          for(let y = 0; y < integer; y++ ){
            board += "+"
          }
    }
    console.log(board)
}

  generateShape(5)