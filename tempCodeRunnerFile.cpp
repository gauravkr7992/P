#include<iostream>
#include<string>
#include<vector>
using namespace std;
int main(){
vector<string> strs;
strs.push_back("flower");
strs.push_back("flow");
strs.push_back("flo");
cout<<strs[0][4];
int siz=INT_MAX;
        string prefix="";
        for(int i=0;i<strs.size();i++){
            string s=strs[i];
            int l=s.size();
            siz=min(siz,l);
        }
        
        int count=1;
        for(int i=0;i<siz;i++){
            
            char f='\0';
            for(int j=0;j<strs.size();j++){
                if(f=='\0'){
                string s=strs[j];
                f=s[i];
                
                }
                else{
                    string s=strs[j];
                    if(s[i]!=f) {
                        count=0;
                        break;

                }
                
            }
            }
           
            if(count==0) break;
            prefix.push_back(f);
        }
        cout<<prefix<<endl;
return 0;
}