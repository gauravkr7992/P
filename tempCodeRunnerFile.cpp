#include<iostream>
#include<string>
using namespace std;
int main(){
string a="001";
string b="010";
string res;
int x=a[0]^b[0];
x=x^1;
int y=a[1]^b[1];
cout<<to_string(x)<<endl;
res.insert(0,to_string(x));
res.insert(0,to_string(y));
cout<<res;
return 0;
}