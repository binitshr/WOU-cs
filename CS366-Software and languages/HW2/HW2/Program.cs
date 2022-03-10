using System;
using System.IO;
namespace HW2
{
    class Program
    {
        // Command line usage information
        private static void PrintUsage()
        {
            Console.WriteLine("Usage is:\n" +
                "\tdotnet run C inputfile outputfile\n" +
                "Where:\n" +
                " C is the column number to fit to\n" +
                " inputfile is the input text file\n" +
                " outputfile is the new output file base name containing the wrapped text.\n" +
                "example: dotnet run 72 myfile.txt myfile_wrapped.txt");
        }
        static void Main(string[] args)
        {
            //initializing number of columns to fit the text to
            int c = 50;

            string inputFile;

            string outputFile = " ";

            StreamReader scanner = null;

            if (args.Length != 3)
            {
                PrintUsage();

                Environment.Exit(1);
            }
            try
            {
                c = int.Parse(args[0]);

                inputFile = args[1];

                outputFile = args[2];

                scanner = new StreamReader(inputFile);
            }
            catch(FileNotFoundException e)
            {
                Console.WriteLine("error loading input file.");

                Environment.Exit(1);

                throw e;
            }
            catch(Exception e)
            {
                Console.WriteLine("Error with input.");

                PrintUsage();

                Environment.Exit(1);

                throw e;
            }
            //read in the word from the file
            IQueueInterface<string> words = new LinkedQueue<string>();

            // Scanning in the word into the buffer
            string[] buffer = scanner.ReadToEnd().Split(' ', '\n', '\r');

            for (int i = 0; i < buffer.Length; i++)
            {
                if (buffer[i] != "")
                {
                    words.Push(buffer[i]);
                }
            }
            scanner.Close();

            int spaceRemaining = WrapSimply(words, c, outputFile);

            Console.WriteLine("Total spaces remaining: " + spaceRemaining);
        }
        private static int WrapSimply(IQueueInterface<string> words, int columnLength, string outputFilename)
        {
            StreamWriter output;
            try
            {
                output = new StreamWriter(outputFilename);
            }
            catch(FileNotFoundException e)
            {
                Console.WriteLine("Unable to create file"  + outputFilename + " using STDOUT instead");

                output = new StreamWriter(Console.OpenStandardOutput());

                throw e;
            }
            
            int col = 0;
            int spacesRemaining = 0;

            while (!words.IsEmpty())
            {
                string str = words.Peek();

                int len = str.Length;

                if (col == 1)
                {
                    output.Write(str);

                    col += len;

                    words.Pop();
                }
                else if ((col + len >= columnLength))
                {
                    output.WriteLine();

                    spacesRemaining += (columnLength - col);

                    col = 1;
                }
                else
                {
                    output.Write(" ");
                    
                    output.Write(str);

                    col += (len + 1);

                    words.Pop();
                }
            }

            output.WriteLine();

            output.Close();

            return spacesRemaining;
        }
    }
}