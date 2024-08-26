// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response) => {
  const { num } = req.params;

  // Ensure num is parsed as a number
  const parsedNum = parseInt(num, 10);

  // Validate parsedNum
  if (isNaN(parsedNum)) {
    return res.status(400).send("Invalid input, please provide a valid number.");
  }

  const fibN: number = fibonacci(parsedNum);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  } else {
    result = `fibonacci(${parsedNum}) is ${fibN}`;
  }

  res.send(result);
};
