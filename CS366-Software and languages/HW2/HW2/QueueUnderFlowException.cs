using System;

namespace HW2
{
    public class QueueUnderflowException : SystemException
    {
        public QueueUnderflowException() : base()
        {

        }
        public QueueUnderflowException(string message) : base(message)
        
        {}
    }
}