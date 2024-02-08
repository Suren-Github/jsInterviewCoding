class Stack:
    def __init__(self):
        self.items = []
        
    def push(self, element):
        self.items.append(element)

    def pop(self):
        if self.is_empty():
            return "Underflow"
        return self.items.pop()
        
    def peek(self): # to view the top item without removing it
        if not self.is_empty():
            return self.items[-1]
        
    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

    def clear(self):
        self.items = []
        
stack = Stack()
stack.push(12)
stack.push(1)
stack.push(2)
stack.push(42)
stack.push(31)
print(stack.size())
stack.pop()
print(stack.size())
print(stack.peek())
# stack.clear()
print(stack.size())
print(stack.is_empty())
