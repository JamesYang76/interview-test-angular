using StudentApi.Models.Students;
using StudentApi.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace StudentApi.Mediatr.Students
{
    public class DeleteStudentRequest : IRequest<DeleteStudentResponse>
    {
        public string StudentId { get; set; }

         public DeleteStudentRequest(string Id) 
         {
            StudentId = Id;
         }
    }

    public class DeleteStudentResponse
    {
        public bool Result { get; set; }
    }

    public class DeleteStudentsHandler : IRequestHandler<DeleteStudentRequest, DeleteStudentResponse>
    {
        private IStudentsService _studentsService;

        public DeleteStudentsHandler(IStudentsService studentsService)
        {
            _studentsService = studentsService;
        }

        public Task<DeleteStudentResponse> Handle(DeleteStudentRequest request, CancellationToken cancellationToken)
        {

            var response = new DeleteStudentResponse
            {
                Result = _studentsService.DeleteStudent(request.StudentId)
            };

            return Task.FromResult(response);
        }
    }
}
