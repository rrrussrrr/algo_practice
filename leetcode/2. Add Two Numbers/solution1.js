var addTwoNumbers = function(l1, l2) {
   
    // Recursive Approach
        
    
        function helper(n1, n2, carry = 0) {
            if (!n1 && !n2 && carry === 0) return null
            let sum = carry
            carry = 0;
            if (n1) {
                sum += n1.val
                n1 = n1.next
            }
            if (n2){
                sum += n2.val
                n2 = n2.next
            }
            if (sum >= 10) {
                carry = 1;
                sum = sum - 10;
            }
            let result = new ListNode(sum)
            result.next = helper(n1, n2, carry)
            return result
        } 
        
        return helper(l1, l2)
    // Iterative Approach
    //     let cur1 = new ListNode();
    //     let cur2 = new ListNode();
    //     cur1.next = l1;
    //     cur2.next = l2;
        
    //     let result = new ListNode();
    //     let curRes = result;
    //     let carry = 0;
    //     while (cur1.next || cur2.next || carry === 1) {
    //         let sum = carry;
    //         carry = 0;
    //         if (cur1.next) {
    //             cur1 = cur1.next;
    //             sum += cur1.val;
    //         }
    //         if (cur2.next) {
    //             cur2 = cur2.next;
    //             sum += cur2.val;
    //         }
            
    //         if (sum >= 10) {
    //             carry = 1;
    //             sum = sum - 10;
    //         }
            
            
    //         curRes.next = new ListNode(sum);
    //         curRes = curRes.next;
    //     }
        
    //     return result.next;
        
        
    };