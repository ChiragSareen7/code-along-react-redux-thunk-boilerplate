import React from 'react'

export function userData(user) {
  return {
    type:"Success",
    payload:user
  }

  
}
export function getStatus(error){
    return{
      type: "Error",
        payload:error
    }
}
