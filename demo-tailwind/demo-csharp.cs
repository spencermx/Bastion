using System;

namespace TreeSitterDemo
{
    public class Calculator
    {
        private int result;

        public Calculator()
        {
            result = 0;
        }

        public int Add(int a, int b)
        {
            if (a < 0 || b < 0)
            {
                throw new ArgumentException("Negative numbers not allowed");
            }

            result = a + b;
            return result;
        }

        public int Subtract(int a, int b)
        {
            result = a - b;
            return result;
        }

        public int Multiply(int a, int b)
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Processing step {i}");
            }
            
            result = a * b;
            return result;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Calculator calc = new Calculator();

            try
            {
                int sum = calc.Add(5, 3);
                Console.WriteLine($"Sum: {sum}");

                int product = calc.Multiply(4, 2);
                Console.WriteLine($"Product: {product}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
