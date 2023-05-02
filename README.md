//=======================================================================
=====
// Name : Graph_BFS_DFS.cpp
// Author : Samadhan
// Version :
// Copyright : Your copyright notice
// Description : ......DSA Lab PR-06: Graph........
//=======================================================================
=====
#include &lt;iostream&gt;
#include &lt;string.h&gt;
using namespace std;
class DLLNode
{
public:
char data[10];
DLLNode *down;
DLLNode *next;
}*Head;
class Stack
{
public:
char vertex[10];
int in_stack(char node[]);
}stk[10];
int Stack :: in_stack(char node[])
{
int i, present = 0;
for(i=0; i&lt;10; i++)
{
if(strcmp(stk[i].vertex , node) == 0)
present = 1;

}
return present;
}
class Queue
{
public:
char vertex[10];
int in_Queue(char node[]);
}que[10];
int Queue :: in_Queue(char node[])
{
int i, present = 0;
for(i=0; i&lt;10; i++)
{
if(strcmp(que[i].vertex , node) == 0)
present = 1;

}
return present;

}

class Graph : public DLLNode, public Stack, public Queue
{
public:
DLLNode* create_Graph(DLLNode *head);
void display_Graph();
void traverse_DFS();
void traverse_BFS();
void is_Connected();
void check_degree();
};
DLLNode* Graph :: create_Graph(DLLNode *head)
{
int i, j, vertices, adjacent;
DLLNode *tmp, *move, *Newnode;
cout&lt;&lt;&quot;\n\t How many vertices..? : &quot;;
cin&gt;&gt;vertices;
for(i=0; i&lt;vertices; i++)
{
Newnode = new DLLNode;
cout&lt;&lt;&quot;\n\t Enter name of Vertex: &quot;;
cin&gt;&gt;Newnode-&gt;data;
Newnode-&gt;next = NULL;
Newnode-&gt;down = NULL;
if(head == NULL)
{
head = Newnode;
move = tmp = head;
}
else
{
move-&gt;down = Newnode;
move = move-&gt;down;
tmp = move;
}
cout&lt;&lt;&quot;\n\t How many adjacent vertices.? : &quot;;
cin&gt;&gt;adjacent;
for(j=0; j&lt;adjacent; j++)
{
Newnode = new DLLNode;
cout&lt;&lt;&quot;\n\t\t Enter name of Adjacent Vertex: &quot;;
cin&gt;&gt;Newnode-&gt;data;
Newnode-&gt;next = NULL;
Newnode-&gt;down = NULL;
tmp-&gt;next = Newnode;
tmp = Newnode;
}

}
return head;
}
void Graph :: display_Graph()
{
DLLNode *tmp, *move;
cout&lt;&lt;&quot;\n\n Vertex :--&gt; Adjacent Vertices....&quot;;
move = Head;
while(move != NULL)
{
cout&lt;&lt;&quot;\n&quot;&lt;&lt;move-&gt;data&lt;&lt;&quot; : &quot;;
tmp = move-&gt;next;
while(tmp != NULL)
{
cout&lt;&lt;&quot;--&gt;&quot;&lt;&lt;tmp-&gt;data;
tmp = tmp-&gt;next;
}
move = move-&gt;down;
}
}
void Graph :: traverse_DFS()
{
DLLNode *tmp;
int done, top = -1;
tmp = Head;
if(!(in_stack(tmp-&gt;data)))
{
top++;
strcpy(stk[top].vertex , tmp-&gt;data);
cout&lt;&lt;&quot;DFS: &quot;&lt;&lt;stk[top].vertex;
while(top != -1)
{
tmp = Head;
while(strcmp(stk[top].vertex , tmp-&gt;data) != 0)
tmp = tmp-&gt;down;
tmp = tmp-&gt;next;
done = 0;
while(tmp != NULL &amp;&amp; done == 0)
{
if(!(in_stack(tmp-&gt;data)))
{
top++;
strcpy(stk[top].vertex , tmp-&gt;data);
cout&lt;&lt;&quot;, &quot;&lt;&lt;stk[top].vertex;
done = 1;
}
else
tmp = tmp-&gt;next;

}
if(tmp == NULL)
top--;

}
}
else
{
cout&lt;&lt;&quot;\n\t Can not start DFS from Vertex: &quot;&lt;&lt;tmp-&gt;data;
}

}

void Graph :: traverse_BFS()
{
DLLNode *tmp;
int front, rear;
front = rear = -1;
tmp = Head;
if(!(in_Queue(tmp-&gt;data)))
{
rear++;
strcpy(que[rear].vertex , tmp-&gt;data);
cout&lt;&lt;&quot;BFS: &quot;&lt;&lt;que[rear].vertex;
while(front != rear)
{
tmp = Head;
front++;
while(strcmp(que[front].vertex , tmp-&gt;data) != 0)

tmp = tmp-&gt;down;

tmp = tmp-&gt;next;
while(tmp != NULL)
{
if(!(in_Queue(tmp-&gt;data)))
{
rear++;
strcpy(que[rear].vertex , tmp-&gt;data);
cout&lt;&lt;&quot;, &quot;&lt;&lt;que[rear].vertex;
}
else
tmp = tmp-&gt;next;

}
}
}
else
{
cout&lt;&lt;&quot;\n\t Can not start DFS from Vertex: &quot;&lt;&lt;tmp-&gt;data;
}
}

void Graph :: is_Connected()
{
}
void Graph :: check_degree()
{
DLLNode *tmp, *move;
int cnt, flag = 0;
cout&lt;&lt;&quot;\n\n Vertex : Degree....&quot;;
move = Head;
while(move != NULL)
{
cout&lt;&lt;&quot;\n&quot;&lt;&lt;move-&gt;data&lt;&lt;&quot; : &quot;;
tmp = move-&gt;next;
cnt = 0;
while(tmp != NULL)
{
cnt++;
tmp = tmp-&gt;next;
}
cout&lt;&lt;&quot; &quot;&lt;&lt;cnt;
if(cnt == 0)
flag = 1;
move = move-&gt;down;
}
if(flag == 0)
cout&lt;&lt;&quot;\n\n As all Vertices has Degree &gt; 0, the Graph is

Connected.&quot;;
else
cout&lt;&lt;&quot;\n\n As some Vertices has Degree = 0, the Graph is

Disconnected.&quot;;
}

int main()
{
Graph G1;
Head = NULL;
cout &lt;&lt; &quot;\n .......DSA Lab PR-06: Graph........ &quot;;
cout &lt;&lt; &quot;\n\n Operation 01: Create Graph..........&quot;;
Head = G1.create_Graph(Head);
cout &lt;&lt; &quot;\n\n Operation 02: Display Graph..........&quot;;
G1.display_Graph();
cout &lt;&lt; &quot;\n\n Operation 03: DFS Traversal of Graph..........&quot;;
G1.traverse_DFS();
cout &lt;&lt; &quot;\n\n Operation 04: BFS Traversal of Graph..........&quot;;
G1.traverse_BFS();

cout &lt;&lt; &quot;\n\n Operation 06: Degrees of Vertices in the
Graph..........&quot;;
G1.check_degree();
return 0;
}
