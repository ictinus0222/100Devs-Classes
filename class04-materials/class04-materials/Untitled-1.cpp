#include <iostream>
using namespace std;
#define MAX_SIZE 5

class Queue
{
private:
    int queue[MAX_SIZE] int front int rear;

public:
    Queue()
    {
        front = -1;
        rear = -1;
    }

    void enqueue(int element)
    {
        if (rear == MAX_SIZE - 1)
        {
            cout << "Queue is full. Cannot insert element " << element << "." << endl;
            return;
        }
        if (front == -1)
        {
            front = 0;
        }
        rear++;
        queue[rear] = element;
        cout << "Element " << element << " inserted into the queue." << endl;
    }

    int dequeue()
    {
        if (front == -1)
        {
            cout << "Queue is empty. Cannot delete element." << endl;
            return -1;
        }
        int element = queue[front];
        if (front == rear)
        {
            front = -1;
            rear = -1;
        }
        else
        {
            front++;
        }
        cout << "Element " << element << " deleted from the queue." << endl;
        return element;
    }

    void display()
    {
        if (front == -1)
        {
            cout << "Queue is empty." << endl;
            return;
        }
        cout << "Queue elements: ";
        for (int i = front; i <= rear; i++)
        {
            cout << queue[i] << " ";
        }
        cout << endl;
    }
};

int main()
{
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    q.dequeue();
    q.display();
    q.enqueue(40);
    q.display();
    return 0;
}